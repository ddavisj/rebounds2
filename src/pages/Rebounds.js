import React from 'react';

const Rebounds = ({ stats }) => {
   const tableHeading = (
      <tr>
         <th>ID</th>
         <th>First</th>
         <th>Last</th>
         <th>Played</th>
         <th>Ave. Rebounds</th>
         <th>Ave. Assists</th>
      </tr>
   );

   const statsArr = Object.values(stats);

   statsArr.sort((a, b) => b.rebounds / b.played - a.rebounds / a.played);

   const mappedStats = statsArr.map(player => {
      return (
         <tr>
            <td>{player.id}</td>
            <td>{player.firstName}</td>
            <td>{player.lastName}</td>
            <td>{player.played}</td>
            <td>{(player.rebounds / player.played).toFixed(2)}</td>
            <td>{(player.assists / player.played).toFixed(2)}</td>
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

export default Rebounds;
