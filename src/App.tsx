import { MantineProvider, Text } from '@mantine/core';

import RTE from './components/RichTextEditor';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <RTE />
    </MantineProvider>
  );
}