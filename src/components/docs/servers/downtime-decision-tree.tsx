import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Link } from '@mui/material';

const DowntimeDecisionTree = () => {
  const [statusPageAccessible, setStatusPageAccessible] = useState<
    null | boolean
  >(null);
  const [sshAccessible, setSshAccessible] = useState<null | boolean>(null);
  const [pingServerWorks, setPingServerWorks] = useState<null | boolean>(null);
  const [pingDtiServersWorks, setPingDtiServersWorks] = useState<
    null | boolean
  >(null);
  const [stop, setStop] = useState<boolean>(false);

  const getResult = () => {
    if (sshAccessible) {
      if (statusPageAccessible) {
        return 'Faça login por SSH e reinicie os serviços afetados. Não entre em contato com a DTI.';
      } else {
        return 'Faça login por SSH e inicie o authentik e o uptime-kuma - ele auxiliará a identificar outros serviços que estão off-line, para que você possa reiniciá-los. Não entre em contato com a DTI.';
      }
    }

    if (pingServerWorks) {
      return 'O servidor responde a pings. Pode ser que o servidor esteja reiniciando. Aguarde até 30 minutos e tente o acesso SSH novamente. Se o problema persistir, pode ser que o OpenSSH esteja configurado incorretamente ou que a porta 22 tenha sido bloqueada. Entre em contato com a DTI para verificar o estado do Firewall.';
    }

    if (pingDtiServersWorks) {
      return 'Pode ser que o servidor esteja reiniciando. Aguarde até 30 minutos e tente o acesso SSH novamente. Se o problema persistir, entre em contato com a DTI para verificar o estado da máquina e, se necessário, solicitar a reinicialização dela.';
    }

    if (pingDtiServersWorks === false) {
      return 'Aguarde a solução do problema pela DTI. Entre em contato caso esteja demorando muito. Lembre-se de que eles não trabalham aos finais de semana.';
    }
    return 'Ocorreu um erro na lógica do resultado.';
  };

  const setValue = (key, value) => {
    switch (key) {
      case 'statusPageAccessible':
        setStatusPageAccessible(value);
        break;
      case 'sshAccessible':
        setSshAccessible(value);
        break;
      case 'pingServerWorks':
        setPingServerWorks(value);
        break;
      case 'pingDtiServersWorks':
        setPingDtiServersWorks(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (
      sshAccessible ||
      pingServerWorks ||
      pingDtiServersWorks ||
      pingDtiServersWorks === false
    ) {
      setStop(true);
    } else {
      setStop(false);
    }
  }, [sshAccessible, pingServerWorks, pingDtiServersWorks]);

  const reset = () => {
    setStatusPageAccessible(null);
    setSshAccessible(null);
    setPingServerWorks(null);
    setPingDtiServersWorks(null);
    setStop(false);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '10px' }}>
      <CardContent>
        {statusPageAccessible === null && (
          <>
            <Typography variant="h6">
              A{' '}
              <Link href="https://status.cacic.dev.br" target="_blank">
                página de estado dos serviços
              </Link>{' '}
              está acessível?
            </Typography>
            <br />

            <Button
              variant="contained"
              onClick={() => setValue('statusPageAccessible', true)}>
              Sim
            </Button>
            <Button
              variant="contained"
              onClick={() => setValue('statusPageAccessible', false)}>
              Não
            </Button>
          </>
        )}

        {statusPageAccessible !== null && sshAccessible === null && (
          <>
            <Typography variant="body1">
              {statusPageAccessible
                ? 'A página de estado dos serviços do servidor está acessível.'
                : 'A página de estado dos serviços do servidor não está acessível.'}
            </Typography>
            <Typography variant="h6">
              O servidor responde ao acesso SSH?
            </Typography>
            Conecte-se diretamente ao servidor, sem passar pelo proxy.
            <br />
            O servidor pode responder apenas a solicitações originados na
            unespNET.
            <br />
            <br />
            <code> ssh &lt;user&gt;@&lt;domínio/ip&gt; </code>
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => setValue('sshAccessible', true)}>
              Sim
            </Button>
            <Button
              variant="contained"
              onClick={() => setValue('sshAccessible', false)}>
              Não
            </Button>
            <Button variant="contained" onClick={reset}>
              Reiniciar
            </Button>
          </>
        )}

        {statusPageAccessible !== null &&
          sshAccessible === false &&
          pingServerWorks === null && (
            <>
              <Typography variant="body1">
                {statusPageAccessible
                  ? 'A página de estado dos serviços do servidor está acessível.'
                  : 'A página de estado dos serviços do servidor não está acessível.'}
                <br />O servidor não está acessível por SSH.
              </Typography>
              <Typography variant="h6">O servidor responde a pings?</Typography>
              Conecte-se diretamente ao servidor, sem passar pelo proxy.
              <br />
              O servidor pode responder apenas a pings originados na unespNET.
              <br />
              <br />
              <code> ping &lt;domínio/ip&gt; </code>
              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => setValue('pingServerWorks', true)}>
                Sim
              </Button>
              <Button
                variant="contained"
                onClick={() => setValue('pingServerWorks', false)}>
                Não
              </Button>
              <Button variant="contained" onClick={reset}>
                Reiniciar
              </Button>
            </>
          )}

        {statusPageAccessible !== null &&
          sshAccessible === false &&
          pingServerWorks === false &&
          pingDtiServersWorks === null && (
            <>
              <Typography variant="body1">
                {statusPageAccessible
                  ? 'A página de estado dos serviços do servidor está acessível.'
                  : 'A página de estado dos serviços do servidor não está acessível.'}
                <br />
                O servidor não está acessível por SSH.
                <br />O servidor não responde a pings.
              </Typography>
              <Typography variant="h6">
                <i>Toda</i> a infraestrutura de rede da DTI responde a pings?
              </Typography>
              <code>ping fct1-pp.net.unesp.br</code>
              <br />
              <code>ping pprudente.fct.unesp.br</code>
              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => setValue('pingDtiServersWorks', true)}>
                Sim
              </Button>
              <Button
                variant="contained"
                onClick={() => setValue('pingDtiServersWorks', false)}>
                Não
              </Button>
              <Button variant="contained" onClick={reset}>
                Reiniciar
              </Button>
            </>
          )}

        {stop && (
          <>
            <Typography variant="body1">
              {statusPageAccessible !== null && (
                <p>
                  {statusPageAccessible
                    ? 'A página de estado dos serviços do servidor está acessível.'
                    : 'A página de estado dos serviços do servidor não está acessível.'}
                </p>
              )}
              {sshAccessible !== null && (
                <p>
                  {sshAccessible
                    ? 'O servidor está acessível por SSH.'
                    : 'O servidor não está acessível por SSH.'}
                </p>
              )}
              {pingServerWorks !== null && (
                <p>
                  {pingServerWorks
                    ? 'O servidor responde a pings.'
                    : 'O servidor não responde a pings.'}
                </p>
              )}
              {pingDtiServersWorks !== null && (
                <p>
                  {pingDtiServersWorks
                    ? 'A infraestrutura da DTI responde a pings.'
                    : 'A infraestrutura da DTI não responde a pings.'}
                </p>
              )}
            </Typography>
            <Typography variant="h6">Recomendação</Typography>
            <Typography variant="body1">{getResult()}</Typography>
            <br />
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
