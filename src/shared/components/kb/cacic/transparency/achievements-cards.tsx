import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';

const gridContainer = {
  maxWidth: 345,
  minWidth: 165,
  // Same height for all cards
  display: 'flex',
};

const gridItem = {
  minHeight: 140,
  minWidth: 140,
  margin: '1em',
  // Same height for all cards
  flex: 1,
};

const cardImage = {
  minHeight: 140,
  objectFit: 'cover',
};

export default function AchievementsCards({
  achievementsData,
}: {
  achievementsData: Achievements[];
}) {
  return (
    <Grid container spacing={2}>
      {achievementsData.map((achievement, index) => (
        <Grid size={{ xs: 4 }} sx={gridContainer} key={index}>
          <Card sx={gridItem}>
            <CardMedia
              sx={cardImage}
              component="img"
              image={
                achievement.image
                  ? require(`@site/static/openness/${achievement.image}`)
                      .default
                  : require('@site/static/openness/placeholder.webp').default
              }
              title={achievement.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {achievement.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {achievement.content}
              </Typography>
              {achievement.url && (
                <CardActions>
                  <Button size="small" href={achievement.url}>
                    Ver mais
                  </Button>
                </CardActions>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export interface Achievements {
  image?: string;
  title: string;
  content: string;
  url?: string;
}
