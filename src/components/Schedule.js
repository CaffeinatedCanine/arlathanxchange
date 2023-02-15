import React from "react";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';

function Schedule() {
	dayjs.extend(localizedFormat);
	const nominationsOpen = dayjs.unix(1678636800).format('LLLL');
	const nominationsClose = dayjs.unix(1679760000).format('LLLL');
	const signUpsOpen = dayjs.unix(1679846400).format('LLLL');
	const signUpsClose = dayjs.unix(1681056000).format('LLLL');
	const assignments = dayjs.unix(1681257600).format('LLLL');
	const worksDue = dayjs.unix(1684684800).format('LLLL');
	const worksRevealed = dayjs.unix(1685289600).format('LLLL');
	const creatorsRevealed = dayjs.unix(1685894400).format('LLLL');

	return (
		<ul>
			<li>
				<strong>Nominations Open: </strong> {nominationsOpen}
			</li>
			<li>
				<strong>Nominations Close: </strong> {nominationsClose}
			</li>
			<li>
				<strong>Sign-Ups Open: </strong> {signUpsOpen}
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

export default Schedule;
