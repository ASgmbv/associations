import React from 'react'
import {Box,Container} from '@chakra-ui/react'
const Documents = () => {
  return (
    <Container>
    <Box display = "flex" justifyContent = "center" alignItems = "center" marginTop = "100px">
        <img src="https://marketplace.canva.com/EAEwJpQuX0M/1/0/1600w/canva-dark-blue-%26-yellow-modern-jamie-completion-certificate-bi48QxAlV9o.jpg" alt=""  width="100"  style = {{marginRight: "20px",border: '1px solid black',borderRadius:'10px'}}/>  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhLdiEkAlkwdV_3IswhTL-5JmBMRqmrD0TA&usqp=CAU" alt="" width="400"  style = {{marginLeft: "20px",border: '1px solid black',borderRadius:'10px'}}/>  
        <img src="https://help.heinonline.org/wp-content/uploads/kb5-7.png" alt=""  width="400" style = {{marginLeft: "20px",border: '1px solid black',borderRadius:'10px'}}/>  
    </Box>
    </Container>
  )
}

export default Documents