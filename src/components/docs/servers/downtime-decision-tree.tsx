import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

type Step = {
  key: string;
  question: string;
  instructions?: React.ReactNode;
};

type StepValues = {
  [key: string]: boolean | undefined;
};

type ServerTroubleshootingGuide = {
  id: string;
  name: string;
  description: string;
  steps: Step[];
  getResult: (values: StepValues) => string;
};

const fctDtiWebXp01Steps: Step[] = [
  {
    key: 'statusPageAccessible',
    question: 'A página de estado dos serviços está acessível?',
    instructions: (
      <>
        <Link href="https://status.cacic.com.br" target="_blank">
          https://status.cacic.com.br
        </Link>
      </>
    ),
  },
  {
    key: 'sshAccessible',
    question: 'O servidor responde ao acesso SSH?',
    instructions: (
      <>
        Conecte-se diretamente ao servidor, sem passar pelo proxy.
        <br />
        O servidor pode responder apenas a solicitações originadas na unespNET.
        <br />
        <br />
        <code>ssh &lt;user&gt;@&lt;domínio/ip&gt;</code>
      </>
    ),
  },
  {
    key: 'pingServerWorks',
    question: 'O servidor responde a pings?',
    instructions: (
      <>
        Conecte-se diretamente ao servidor, sem passar pelo proxy.
        <br />
        O servidor pode responder apenas a pings originados na unespNET.
        <br />
        <br />
        <code>ping &lt;domínio/ip&gt;</code>
      </>
    ),
  },
  {
    key: 'pingDtiServersWorks',
    question: 'Toda a infraestrutura de rede da DTI responde a pings?',
    instructions: (
      <>
        <code>ping fct1-pp.net.unesp.br</code>
        <br />
        <code>ping pprudente.fct.unesp.br</code>
      </>
    ),
  },
];

const getFctDtiWebXp01Result = (values: StepValues) => {
  const {
    statusPageAccessible,
    sshAccessible,
    pingServerWorks,
    pingDtiServersWorks,
  } = values;

  if (sshAccessible) {
    return statusPageAccessible
      ? 'Faça login por SSH e reinicie os serviços afetados. Não entre em contato com a entidade responsável pela hospedagem.'
      : 'Faça login por SSH e inicie o authentik e o uptime-kuma - ele auxiliará a identificar outros serviços que estão off-line, para que você possa reiniciá-los. Não entre em contato com a DTI.';
  }

  if (pingServerWorks) {
    return 'Pode ser que o servidor esteja reiniciando. Aguarde até 30 minutos e tente o acesso SSH novamente. Se o problema persistir, pode ser que o OpenSSH esteja configurado incorretamente ou que a porta 22 tenha sido bloqueada. Entre em contato com a entidade responsável pela hospedagem para verificar o estado da máquina. Caso ela esteja normal, contate a DTI para verificar o estado do Firewall.';
  }

  if (pingDtiServersWorks) {
    return 'Pode ser que o servidor esteja reiniciando. Aguarde até 30 minutos e tente o acesso SSH novamente. Se o problema persistir, entre em contato com a entidade responsável pela hospedagem para verificar o estado da máquina e, se necessário, solicitar a reinicialização dela.';
  }

  if (pingDtiServersWorks === false) {
    return 'Aguarde a solução do problema pela DTI. Entre em contato caso esteja demorando muito. Lembre-se de que eles não trabalham aos finais de semana.';
  }

  return 'Ocorreu um erro na lógica do resultado.';
};

const servers: ServerTroubleshootingGuide[] = [
  {
    id: 'FCT-DTI-X-01',
    name: 'FCT-DTI-X-01',
    description:
      'Servidor web de produção da Diretoria Técnica de Informática.',
    steps: fctDtiWebXp01Steps,
    getResult: getFctDtiWebXp01Result,
  },
];

const DowntimeDecisionTree = () => {
  const [selectedServerId, setSelectedServerId] = useState(servers[0].id);
  const [values, setValues] = useState<StepValues>({});
  const [stepIndex, setStepIndex] = useState(0);

  const selectedServer =
    servers.find((server) => server.id === selectedServerId) ?? servers[0];
  const steps = selectedServer.steps;

  const handleServerChange = (event: SelectChangeEvent) => {
    setSelectedServerId(event.target.value);
    setValues({});
    setStepIndex(0);
  };

  const handleResponse = (value: boolean) => {
    const key = steps[stepIndex].key;
    const newValues = { ...values, [key]: value };
    setValues(newValues);

    if (
      (key === 'sshAccessible' && value === true) ||
      (key === 'pingServerWorks' && value === true) ||
      key === 'pingDtiServersWorks'
    ) {
      setStepIndex(steps.length); // show result
    } else {
      setStepIndex((prev) => prev + 1);
    }
  };

  const reset = () => {
    setValues({});
    setStepIndex(0);
  };

  const currentStep = steps[stepIndex];
  const showResult =
    stepIndex >= steps.length || values.pingDtiServersWorks !== undefined;

  return (
    <MuiThemeClientProvider>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Stack spacing={2} sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="downtime-server-label">Servidor</InputLabel>
              <Select
                labelId="downtime-server-label"
                id="downtime-server"
                value={selectedServerId}
                label="Servidor"
                onChange={handleServerChange}>
                {servers.map((server) => (
                  <MenuItem key={server.id} value={server.id}>
                    {server.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography variant="body2" color="text.secondary">
              {selectedServer.description}
            </Typography>
          </Stack>

          {currentStep && !showResult && (
            <>
              <Typography variant="h6">{currentStep.question}</Typography>

              {currentStep.instructions && (
                <Typography
                  component="div"
                  variant="body2"
                  sx={{ mt: 1, mb: 2 }}>
                  {currentStep.instructions}
                </Typography>
              )}

              <Button
                variant="contained"
                sx={{ mr: 1 }}
                onClick={() => handleResponse(true)}>
                Sim
              </Button>
              <Button variant="contained" onClick={() => handleResponse(false)}>
                Não
              </Button>
              <Button variant="outlined" sx={{ ml: 2 }} onClick={reset}>
                Reiniciar
              </Button>
            </>
          )}

          {showResult && (
            <>
              <Typography component="div" variant="body1">
                {Object.keys(values).map((key) => {
                  const step = steps.find((s) => s.key === key);
                  if (!step) return null;

                  return (
                    <p key={key}>
                      <strong>{step.question}</strong>
                      <br />
                      Resposta: {values[key] ? 'Sim' : 'Não'}
                    </p>
                  );
                })}
              </Typography>
              <Typography variant="h6">Recomendação</Typography>
              <Typography variant="body1">
                {selectedServer.getResult(values)}
              </Typography>
              <br />
              <Button variant="contained" onClick={reset}>
                Reiniciar
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </MuiThemeClientProvider>
  );
};

export default DowntimeDecisionTree;
