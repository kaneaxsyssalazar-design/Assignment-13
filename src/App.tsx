import React from 'react';
import {
  Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter,
  Dropdown, RadioButton, Img, HeroImage, Card,
} from './components';

const Section: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <section style={{ margin: '2rem 0' }}>
    <h2>{title}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
      {children}
    </div>
  </section>
);

const App: React.FC = () => (
  <main style={{ maxWidth: 960, margin: '0 auto', padding: '1rem', fontFamily: 'sans-serif' }}>
    <HeroImage />
    <h1>UI Garden – Component Library</h1>

    <Section title="Button">
      <Button label="Default" />
      <Button label="Disabled" disabled />
    </Section>
    <Section title="Label">
      <Label text="Default" />
      <Label text="Disabled" disabled />
    </Section>
    <Section title="Text">
      <Text text="Default text" />
      <Text text="Disabled text" disabled />
    </Section>
    <Section title="Dropdown">
      <Dropdown />
      <Dropdown disabled />
    </Section>
    <Section title="Radio button">
      <RadioButton label="Enabled" name="demo" />
      <RadioButton label="Disabled" name="demo" disabled />
    </Section>
    <Section title="Img">
      <div style={{ width: 200 }}><Img /></div>
      <div style={{ width: 200 }}><Img disabled /></div>
    </Section>
    <Section title="Card">
      <Card />
      <Card disabled />
    </Section>
    <Section title="Table">
      <Table>
        <TableHeader>
          <TableRow><TableCell as="th">Name</TableCell><TableCell as="th">Role</TableCell></TableRow>
        </TableHeader>
        <tbody>
          <TableRow><TableCell>Ada</TableCell><TableCell>Engineer</TableCell></TableRow>
        </tbody>
        <TableFooter>
          <TableRow><TableCell colSpan={2}>1 row</TableCell></TableRow>
        </TableFooter>
      </Table>
      <Table disabled>
        <TableHeader disabled>
          <TableRow disabled><TableCell as="th" disabled>Name</TableCell><TableCell as="th" disabled>Role</TableCell></TableRow>
        </TableHeader>
        <tbody>
          <TableRow disabled><TableCell disabled>Ada</TableCell><TableCell disabled>Engineer</TableCell></TableRow>
        </tbody>
      </Table>
    </Section>
  </main>
);

export default App;
