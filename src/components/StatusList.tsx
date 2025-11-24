import React from "react";
// import PropTypes from "prop-types";

import { demoTasks } from "@/data/demoTasks";
import { TaskCard } from "@/components/TaskCard/TaskCard";
import styled from "styled-components";
import type { TaskStatus } from "@/data/types";

interface StatusListProps {
  status: TaskStatus;
}

const statusDisplayMap: Record<TaskStatus, string> = {
  TODO: "To Do",
  INPROGRESS: "In Progress",
  DONE: "Done",
};

function StatusList({ status }: StatusListProps) {
  const filteredTasks = demoTasks.filter((task) => task.status === status);
  return (
    <StatusListStyle>
      <ListHeader>
        <ListTitle>{statusDisplayMap[status]}</ListTitle>
      </ListHeader>

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          image={task.image}
          title={task.title}
          description={task.description}
          date={task.date}
          progress={task.progress}
          emoji={task.emoji}
          profileImage={task.profileImage}
        />
      ))}
    </StatusListStyle>
  );
}

const StatusListStyle = styled.div`
  border-radius: 9px;
  border: 1.5px solid #fff;
  background: #ebecf0;

  display: inline-flex;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ListHeader = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: white 1.5px solid;
`;

const ListTitle = styled.h2`
  color: #172b4d;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 30px;
`;

export default StatusList;
