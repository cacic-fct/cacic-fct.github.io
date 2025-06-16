import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Alert,
  CircularProgress,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { fetchHolidaysForYear } from '@site/src/shared/utils/holidayUtils';
import { addDays, isBefore, subDays, format, isSameDay } from 'date-fns';
import {
  findConsecutiveBusinessDays,
  getNextBusinessDay,
} from '@site/src/shared/utils/dateUtils';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

/**
 * Calculates electoral calendar dates based on the convocation date
 */
async function calculateElectoralCalendar(
  convocationDate: Date,
  holidays: Date[],
) {
  // Clone date to avoid mutations
  const dataConvocacao = new Date(convocationDate.getTime());

  // Registration period: starts at least 3 days after convocation (Art. 26)
  const registrationStart = addDays(dataConvocacao, 3);

  // Registration lasts for at least 3 days (including the first day)
  let registrationEnd = addDays(registrationStart, 2);

  // First possible voting day is 2 days after registration ends
  const firstPossibleVotingDay = addDays(registrationEnd, 2);

  // Find two consecutive business days for voting
  const [firstVotingDay, secondVotingDay] = findConsecutiveBusinessDays(
    firstPossibleVotingDay,
    holidays,
  );

  // Ensure at least 48 hours between registration end and voting
  if (isBefore(registrationEnd, subDays(firstVotingDay, 2))) {
    registrationEnd = subDays(firstVotingDay, 2);
  }

  // Vote counting happens on the last voting day
  const countingDay = secondVotingDay;

  // Take office on the next business day after counting
  const takeOfficeDay = getNextBusinessDay(countingDay, holidays);

  // Campaign period: starts after registration period ends
  const campaignStart = addDays(registrationEnd, 1);
  const campaignEnd = subDays(firstVotingDay, 1);

  return {
    registrationStart,
    registrationEnd,
    campaignStart,
    campaignEnd,
    firstVotingDay,
    secondVotingDay,
    countingDay,
    takeOfficeDay,
  };
}

export default function CalendarioEleitoral() {
  const [convocacaoDate, setConvocacaoDate] = useState<Date | null>(null);
  const [calendarResult, setCalendarResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Format a date with day of week
   */
  const formatDateWithDayOfWeek = (date: Date): string => {
    const formattedDate = format(date, 'dd/MM/yy', { locale: ptBR });
    const dayOfWeek = format(date, 'EEE', { locale: ptBR });
    return `${formattedDate} (${dayOfWeek})`;
  };

  /**
   * Generate the electoral calendar based on the convocation date
   */
  const generateCalendar = async () => {
    if (!convocacaoDate) {
      setError('Por favor, selecione uma data de convocação');
      return;
    }

    setIsLoading(true);
    setCalendarResult(null);
    setError(null);

    try {
      // Fetch holidays for the current year
      const currentYear = convocacaoDate.getFullYear();
      const holidays = await fetchHolidaysForYear(currentYear);

      // Also fetch holidays for next year if convocation is in December
      if (convocacaoDate.getMonth() === 11) {
        const nextYearHolidays = await fetchHolidaysForYear(currentYear + 1);
        holidays.push(...nextYearHolidays);
      }

      // Calculate all the electoral calendar dates
      const calendar = await calculateElectoralCalendar(
        convocacaoDate,
        holidays,
      );

      // Format the results as a readable string
      const result = [
        `Início da inscrição das chapas: ${formatDateWithDayOfWeek(calendar.registrationStart)} às 8h`,
        `Fim da inscrição das chapas: ${formatDateWithDayOfWeek(calendar.registrationEnd)} às 8h`,
        `Período de campanha: ${
          isSameDay(calendar.campaignStart, calendar.campaignEnd)
            ? `${formatDateWithDayOfWeek(calendar.campaignStart)}`
            : `${formatDateWithDayOfWeek(calendar.campaignStart)} a ${formatDateWithDayOfWeek(calendar.campaignEnd)}`
        }`,
        `1º dia de votação: ${formatDateWithDayOfWeek(calendar.firstVotingDay)}. Início às 8h`,
        `2º dia de votação: ${formatDateWithDayOfWeek(calendar.secondVotingDay)}. Fim às 18h`,
        `Apuração dos votos: ${formatDateWithDayOfWeek(calendar.countingDay)}`,
        `Posse da chapa vencedora: ${formatDateWithDayOfWeek(calendar.takeOfficeDay)}`,
        ``,
        `O período de votação não pode ocorrer em feriados, finais de semana ou durante as férias acadêmicas.`,
      ].join('\n');

      setCalendarResult(result);
    } catch (error) {
      console.error('Error generating calendar:', error);
      setError('Ocorreu um erro ao gerar o calendário: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MuiThemeClientProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <Box maxWidth={600} mx="auto" mt={4} p={2}>
          <Typography variant="h5" gutterBottom>
            Gerar Calendário Eleitoral
          </Typography>

          <Stack spacing={2}>
            <DatePicker
              label="Data da convocação do processo eleitoral"
              value={convocacaoDate}
              onChange={setConvocacaoDate}
              slotProps={{ textField: { fullWidth: true } }}
            />

            <Button
              variant="contained"
              onClick={generateCalendar}
              disabled={isLoading || !convocacaoDate}>
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Gerar calendário'
              )}
            </Button>

            {error && <Alert severity="error">{error}</Alert>}

            {calendarResult && (
              <Box mt={3} p={2} bgcolor="background.paper" borderRadius={1}>
                <Typography
                  variant="subtitle1"
                  component="pre"
                  sx={{ whiteSpace: 'pre-wrap' }}>
                  {calendarResult}
                </Typography>
              </Box>
            )}
          </Stack>
        </Box>
      </LocalizationProvider>
    </MuiThemeClientProvider>
  );
}
