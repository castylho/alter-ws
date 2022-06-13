import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface TemperatureCardProps {
  id: number;
  temperature: number;
}

const TemperatureCard: FC<TemperatureCardProps> = ({ id, temperature = 0 }) => {
  return (
    <Card>
      <CardContent>
        <Typography>ID: {id}</Typography>
        <span>Temp: {temperature}C</span>
      </CardContent>
    </Card>
  );
};

export default TemperatureCard;
