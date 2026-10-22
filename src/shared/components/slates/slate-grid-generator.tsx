import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { SlateMember } from './types';

interface SlateGridProps {
  slateMembers: readonly SlateMember[];
}

export default function SlateGridGenerator({ slateMembers }: SlateGridProps) {
  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      justifyContent="flex-start">
      {slateMembers.map((member) => (
        <Grid
          size={{ xs: 4 }}
          alignItems="center"
          justifyContent="center"
          key={`${member.name}-${member.role}`}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt={member.name}
            src={member.avatar}
            slotProps={{ img: { loading: 'lazy' } }}
          />
          <Typography variant="h6">{member.name}</Typography>
          <Typography variant="subtitle1">{member.role}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
