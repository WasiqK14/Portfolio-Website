import React from 'react'
import { Text } from '@chakra-ui/react'

const TagText = ({children,...props}) => {
  return (
    <Text
        fontFamily="monospace"
        fontSize="12px"
        color="gray"
        {...props}
    >
        {children}
    </Text>
  )
}

export default TagText