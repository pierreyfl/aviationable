// var Companies = createReactClass({
//   handleClick: function(event) {},

//   render: function() {
//     return (
//       <div className="card-box">
//         <div className="table-responsive">
//           <table className="table table-hover table-centered m-0">
//             <thead>
//               <tr>
//                 <th>Logo</th>
//                 <th>Name</th>
//                 <th>Employee Count</th>
//                 <th>Total Funding</th>
//                 <th>Revenue</th>
//                 <th>Country</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.props.companies.map(company => {
//                 return (
//                   <tr key={company.id}>
//                     <td>
//                       <img
//                         src={
//                           company.banner_url
//                             ? company.banner_url
//                             : "assets/images/users/avatar-3.jpg"
//                         }
//                         alt="contact-img"
//                         title="contact-img"
//                         className="rounded-circle thumb-sm"
//                         height="128"
//                         width="128"
//                       />
//                     </td>

//                     <td>
//                       <h5 className="m-0 font-weight-normal">
//                         <a href={"companies/" + company.id}>{company.name}</a>
//                       </h5>
//                       <p className="mb-0 text-muted">
//                         <small>{company.revenue}</small>
//                       </p>
//                     </td>

//                     <td>{company.employees_count}</td>
//                     <td>{company.total_funding}</td>

//                     <td>{company.revenue} USD</td>

//                     <td>{company.country}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// });

const Companies = ({ companies }) => {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table table-hover table-centered m-0">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Employee Count</th>
              <th>Total Funding</th>
              <th>Revenue</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {companies.length > 0 ? (
              companies.map(company => {
                return (
                  <tr key={company.id}>
                    <td>
                      <img
                        src={
                          company.banner_url
                            ? company.banner_url
                            : "assets/images/users/avatar-3.jpg"
                        }
                        alt="contact-img"
                        title="contact-img"
                        className="rounded-circle thumb-sm"
                        height="128"
                        width="128"
                      />
                    </td>

                    <td>
                      <h5 className="m-0 font-weight-normal">
                        <a href={"companies/" + company.id}>{company.name}</a>
                      </h5>
                      <p className="mb-0 text-muted">
                        <small>{company.revenue}</small>
                      </p>
                    </td>

                    <td>{company.employees_count}</td>
                    <td>{company.total_funding}</td>

                    <td>{company.revenue} USD</td>

                    <td>{company.country}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Companies;
