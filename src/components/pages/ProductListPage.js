import React from 'react';
import {
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    FormControl,
    PanelContainer
} from '../lib';

export default class ProductListPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="product-selector">
            <Grid>
                <Row>
                    <Col sm={12}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Twelve</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Six</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={6}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Six</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Four</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={4} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Four</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={4}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Four</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Three</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={3} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Three</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={3} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Three</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={3}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Three</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Eight</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={4}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Four</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Ten</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={2}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Two</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Five</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={3} collapseRight>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Three</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                    <Col sm={4}>
                        <PanelContainer>
                            <Panel>
                                <PanelBody>
                                    <h3 className='text-center' style={{margin: 25, marginTop: 0}}>Four</h3>
                                </PanelBody>
                            </Panel>
                        </PanelContainer>
                    </Col>
                </Row>
            </Grid>
        </div>
      </div>
    );
  }
}