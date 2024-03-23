import React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const nominationsOpen = dayjs.unix(1710086400).format("LLLL");
const nominationsClose = dayjs.unix(1711296000).format("LLLL");
const signUpsOpen = dayjs.unix(1711296000).format("LLLL");
const signUpsClose = dayjs.unix(1712505600).format("LLLL");
const assignments = dayjs.unix(1712707200).format("LLLL");
const worksDue = dayjs.unix(1716134400).format("LLLL");
const worksRevealed = dayjs.unix(1716739200).format("LLLL");
const creatorsRevealed = dayjs.unix(1717344000).format("LLLL");

export default function Schedule() {
  return (
    <ul>
      <li>
        <s>
          <strong>Nominations Open: </strong> {nominationsOpen}
        </s>
      </li>
      <li>
        <s>
          <strong>Nominations Close: </strong> {nominationsClose}
        </s>
      </li>
      <li>
        <s>
          <strong>Sign-Ups Open: </strong> {signUpsOpen}
        </s>
      </li>
      <li>
        <strong>Sign-Ups Close: </strong> {signUpsClose}
      </li>
      <li>
        <strong>Assignments Out: </strong> {assignments} (or earlier!)
      </li>
      <li>
        <strong>Works Due: </strong> {worksDue}
      </li>
      <li>
        <strong>Works Revealed: </strong> {worksRevealed}
      </li>
      <li>
        <strong>Creators Revealed: </strong> {creatorsRevealed}
      </li>
    </ul>
  );
}

function SignUpsDate() {
  return <code>{signUpsClose}</code>;
}

function AssignmentsDate() {
  return <code>{assignments}</code>;
}

function DueDate() {
  return <code>{worksDue}</code>;
}

function RevealsDate() {
  return <code>{worksRevealed}</code>;
}

function CreatorsDate() {
  return <code>{creatorsRevealed}</code>;
}

export { SignUpsDate, AssignmentsDate, DueDate, RevealsDate, CreatorsDate };
