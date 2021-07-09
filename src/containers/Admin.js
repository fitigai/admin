import React from 'react'
import Container from "../components/Container"
import Aside from "./Aside"
import axios from 'axios';
import { Avatar, EditIcon, PlusIcon } from 'evergreen-ui'

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
        <Aside></Aside>
        <section className="section--primary">
            <div className="section-container">
              <div className="table-container">
                <table>
                  <tr>
                    <th>Gravatar</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Status</th>
                    <th>Conatct</th>
                    <th>Edite</th>
                  </tr>
                      {items.map(item => (
                        <tr key={item.id}>
                            {this.cell(<Avatar name="Jeroen Ransijn" size={40} />)}
                            {this.cell(item.firstName)}
                            {this.cell(item.lastName)}
                            {this.cell(item.isCoach ? "isCoach" : "isStudent")}
                            {this.cell(<PlusIcon />)}
                            {this.cell(<EditIcon />)}
                          </tr>
                      ))}
                </table>
              </div>
          </div>
        </section>
      </Container>
      )}
  }
}

export default Admin