import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Link } from '@mui/material';

type StepKeys =
  | 'statusPageAccessible'
  | 'sshAccessible'
  | 'pingServerWorks'
  | 'pingDtiServersWorks';

type StepValues = {
  [key in StepKeys]?: boolean;
};

const steps: {
  key: StepKeys;
  question: string;
  instructions?: React.ReactNode;
}[] = [
  {
    key: 'statusPageAccessible',
    question: 'A página de estado dos serviços está acessível?',
    instructions: (
      <>
        <Link href="https://status.cacic.dev.br" target="_blank">
          https://status.cacic.dev.br
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

const getResult = (values: StepValues) => {
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

const DowntimeDecisionTree = () => {
  const [values, setValues] = useState<StepValues>({});
  const [stepIndex, setStepIndex] = useState(0);

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
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        {currentStep && !showResult && (
          <>
            <Typography variant="h6">{currentStep.question}</Typography>
            <br />
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
            <Typography variant="body1">
              {(Object.keys(values) as StepKeys[]).map((key) => {
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
            <Typography variant="body1">{getResult(values)}</Typography>
            <br />
            <Button variant="contained" onClick={reset}>
              Reiniciar
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DowntimeDecisionTree;
