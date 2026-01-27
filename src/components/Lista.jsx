import { List, ListItem, Card } from "@material-tailwind/react";

export function Lista({ listaCompleta }) {
  if (!listaCompleta || listaCompleta.length === 0) {
    return (
      <Card className="w-96">
        <List>
          <ListItem>No hay elementos en la lista</ListItem>
        </List>
      </Card>
    );
  }

  return (
    <List>
      {listaCompleta.map((item, index) => (
        <ListItem key={index}>
          {item}
        </ListItem>
      ))}
    </List>
  );
}
