import React from 'react'
import Container from "../components/Container"
import Edit from "../components/Edit"
import Trash from "../components/Trash"
import Aside from "./Aside"
import axios from 'axios';
import { Avatar, Pagination, Table, Spinner, Pane } from 'evergreen-ui'
import moment from 'moment'

class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isShown: false
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

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items)
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
        <Spinner />
      </Pane>;
    } else {
      return (
        <Container wide={false} transition={true}>
          <Aside />
        <section className="section--primary">
            <div className="section-container">
              <div className="table-container">
                <Table>
                <Table.Head>
                  {/* <Table.SearchHeaderCell /> */}
                  {/* <Table.TextHeaderCell></Table.TextHeaderCell> */}
                  <Table.TextHeaderCell flexBasis={100} flexShrink={0} flexGrow={0}></Table.TextHeaderCell>
                  <Table.TextHeaderCell></Table.TextHeaderCell>
                  <Table.TextHeaderCell>Created at</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Email</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Phone</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Status</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Actions</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={500}>
                  {items.map((item) => (
                    <Table.Row key={item._id}>
                      {/* <Table.TextCell></Table.TextCell> */}
                      <Table.TextCell flexBasis={100} flexShrink={0} flexGrow={0}><Avatar name="Jeroen Ransijn" size={40} /></Table.TextCell>
                      <Table.TextCell>{item.firstName} {item.lastName}</Table.TextCell>
                      <Table.TextCell>{moment(item.createdAt).format('MMMM Do YYYY')}</Table.TextCell>
                      <Table.TextCell><a href={"mailto:" + item.email}>{item.email}</a></Table.TextCell>
                      <Table.TextCell isNumber>{item.phone}</Table.TextCell>
                      <Table.TextCell>{item.isCoach ? "isCoach" : "isStudent"}</Table.TextCell>
                      <Table.TextCell>
                        <div className="reset-float">
                          <Edit /><Trash />
                        </div>
                      </Table.TextCell>
                    </Table.Row>
                  ))}
                </Table.Body>
                </Table>
                <Pagination page={1} totalPages={5} className="table-pagination"></Pagination> 
              </div>
            </div>
        </section>
      </Container>
      )}
  }
}

export default Admin