import { Box, Center, FormControl, FormLabel, HStack, Input, Text, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const PomodoroTimer = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [isReseted, setIsReseted] = useState(true);
    const [initialTime, setInitialTime] = useState(10)
    const [minutes, setMinutes] = useState(initialTime);
    const [seconds, setSeconds] = useState(0);

    const handleStartTimer = () => {
        setIsRunning(!isRunning)
        setIsReseted(false)
    }

    const handleResetTimer = () => {
        setIsRunning(false)
        setIsReseted(true)
        setMinutes(initialTime)
        setSeconds(0)
    }

    const changeInitialTime = (e) => {
        setInitialTime(e.target.value)
        setMinutes(e.target.value)
    }

    useEffect(() => {
        let interval;

        if (isRunning && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (isRunning && minutes === 0 && seconds === 0) {
            alert("Tempo esgotado!");
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, minutes, seconds]);

    return (
        <Center>
            <Box width={'100%'} maxWidth={'400px'} p={'4'}>
                <Text fontSize={'4xl'} mb={'4px'} textAlign={'center'}>
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </Text>
                <FormControl mb={'4'}>
                    <FormLabel>Definir tempo(minutos)</FormLabel>
                    <Input
                        type='number'
                        isDisabled={!isReseted}
                        value={initialTime}
                        onChange={changeInitialTime} />
                </FormControl>
                <HStack spacing={4}>
                    <Button onClick={handleStartTimer} colorScheme={isRunning ? 'red' : 'green'}>
                        {isRunning ? 'Pausar' : 'Iniciar'}
                    </Button>
                    <Button onClick={handleResetTimer}>
                        Reiniciar
                    </Button>
                </HStack>
            </Box>
        </Center>
    )
}

export default PomodoroTimer