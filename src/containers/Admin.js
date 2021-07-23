import React from 'react'
import Container from "../components/Container"
import axios from 'axios';
import { Avatar, EditIcon, TrashIcon, Button } from 'evergreen-ui'
import Moment from 'react-moment';
import 'moment-timezone';

class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get('users.json')
      .then(
        (result) => {
          console.log(result.data)
          this.setState({
            isLoaded: true,
            items: result.data.slice(0, 20)
          });
        },
        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  cell = content =>
    <td style={{textAlign: 'center'}}>
      {content}
    </td>

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items)
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
      <Container wide={false} transition={true}>
        <section className="section--primary">
            <div className="section-container">
              <div className="table-container">
                <table>
                  <thead>
                  <tr>
                    <th>Gravatar</th>
                    <th>Created at</th>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            {this.cell(<Avatar name="Jeroen Ransijn" size={40} />)}
                            {this.cell(<Moment format="YYYY/MM/DD" date={item.createdAt} />)}
                            {this.cell(<div>{item.firstName} {item.lastName}</div>)}
                            {this.cell(<a href={"mailto:" + item.email}>{item.email}</a>)}
                            {this.cell(item.phone)}
                            {this.cell(item.isCoach ? "isCoach" : "isStudent")}
                          {this.cell(<div><Button marginRight={5} appearance="minimal"><EditIcon/></Button><Button marginRight={5} appearance="minimal"><TrashIcon /></Button></div>)}
                          </tr>
                      ))}
                    </tbody>
                </table>
              </div>
          </div>
        </section>
      </Container>
      )}
  }
}

export default Admin