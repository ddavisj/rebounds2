import React from 'react';

const Points = ({ stats }) => {
   const tableHeading = (
      <tr>
         <th>ID</th>
         <th>First</th>
         <th>Last</th>
         <th>Played</th>
         <th>Ave. Points</th>
      </tr>
   );

   const statsArr = Object.values(stats);

   statsArr.sort((a, b) => b.points / b.played - a.points / a.played);

   const mappedStats = statsArr.map(player => {
      return (
         <tr>
            <td>{player.id}</td>
            <td>{player.firstName}</td>
            <td>{player.lastName}</td>
            <td>{player.played}</td>
            <td>{(player.points / player.played).toFixed(2)}</td>
         </tr>
      );
   });

   return (
      <div>
         <table>
            <tbody>
               {tableHeading}
               {mappedStats}
            </tbody>
         </table>
      </div>
   );
};

export default Points;
