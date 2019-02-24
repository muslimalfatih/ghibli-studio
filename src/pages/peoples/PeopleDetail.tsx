import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { peoplesFetchRequest } from '../../store/peoples/actions'
import { Container, Columns, Content, Card, Image } from 'react-bulma-components'
import LoaderWrapper from '../../components/Loader'

interface TProps {
  peoples: any,
  peoplesFetchRequest: any,
  peopleDetailFetch: any,
  fetchPeoples: any,
  match: any,
  fetchDetail: any
}

interface TState {
  detail: any
}

class PeopleDetail extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      detail: undefined
    }
  }

  componentDidMount() {
    this.props.peoplesFetchRequest()
  }

  render() {
    const { peoples } = this.props;
    const detail = peoples.find((people: any) => people.id === this.props.match.params.id)

    return (
      <Container className="container--people">
        <h1 className="container__header">Character Detail</h1>
        <Columns>
          { detail ?
            <Columns.Column size={12}>
                <Card>
                  <Card.Content>
                      <Image src={detail.image} alt={detail.name} className="is-128x128"/>
                      <Content>
                        <h1>{detail.name}</h1>
                        <p>Age: {detail.age}</p>
                        <p>Gender: {detail.gender}</p>
                        <p>Eye Color: {detail.eye_color}</p>
                      </Content>
                  </Card.Content>
                </Card>
            </Columns.Column>
            :
            <LoaderWrapper/>
          }
        </Columns>
      </Container>
    )
    
  }

}

function mapStateToProps(state: any) {
  return {
    peoples: state.peoples.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ peoplesFetchRequest}, dispatch)
  // ...bindActionCreators({ peoplesFetchRequest, peopleDetailFetch }, dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail)