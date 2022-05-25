import LinearProgress from "@mui/material/LinearProgress";
import Box from '@mui/material/Box';

const MemoryBar = (props) => {
  return (
    <>
      <Box sx={{ width: '80%'}}>
      <LinearProgress variant="determinate" value={props.progress} />
    </Box>
    </>
  );
};

export default MemoryBar;
