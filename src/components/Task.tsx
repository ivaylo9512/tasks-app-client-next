import { TaskFragment } from "../generated/graphql"
import styled from "styled-components"
import { memo } from "react"
import { useRouter } from 'next/router'

type TaskProps = {
    task: TaskFragment
}
const Container = styled.div`
    height: 11vh;
    flex-shrink: 0;
    width: 70%;
    margin: 0.5vh auto;
    background: #000000;
    border-style: groove;
    border-color: white;
    box-shadow: 0 0 0.2vw 0.05vw rgb(0 0 0);
    display: flex;
    border-radius: 1.9vw;
    align-items: center;
    input{
        background: transparent;
        color: white;
        border: 0;
        height: 65%;
        text-align: center;
    }
    input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(100%);
    }
` 

const Task: React.FC<TaskProps> = memo(({ task }) => {
    const { route } = useRouter();

    return(
        <Container>
            <input value={task.name} />
            {route != 'goals' &&
                <>
                    <input type='time' value={task.from || '00:00'} />
                    <input type='time' value={task.to || '00:00'} />
                </>
            }
            {route == 'daily' && 
                <>
                    <input type='radio'/>
                </>
            }
        </Container>
    )
})
export default Task