import { Box, Center, FormControl, FormLabel, HStack, Input, Text, Button } from '@chakra-ui/react'
import React from 'react'

const PomodoroTimer = () => {
  return (
    <Center>
        <Box width={'100%'} maxWidth={'400px'} p={'4'}>
            <Text fontSize={'4xl'} mb={'4px'} textAlign={'center'}>
                10:00
            </Text>
            <FormControl mb={'4'}>
                <FormLabel>Definir tempo(minutos)</FormLabel>
                <Input type='number'/>
            </FormControl>
            <HStack spacing={4}>
                <Button>
                    Iniciar
                </Button>
                <Button>
                    Reiniciar
                </Button>
            </HStack>
        </Box>
    </Center>
  )
}

export default PomodoroTimer