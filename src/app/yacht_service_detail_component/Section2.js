import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/yacht_services_goa/yacht_service_details.module.css'
import { Container, Row, Col, FormGroup, FormControl } from '../react_bootstrap_plugin_component/react_bootstrap'

import { ServiceDetail } from './ServiceDetail'
import { service_data } from '../yacht_services_goa_component/service_data'

function Section2({ param_val,service_detail_arr }) {
    // const service_detail_arr = ServiceDetail.filter((val) => val.param === param_val.serviceid)
    return (
        <>
            <section className={styles.section2}>
                <Container>
                    {service_detail_arr.map((service_val, index) => {
                        return <div key={index}>
                            <h1 className={styles.title}>{service_val.name}</h1>
                            <Row>
                                <Col lg={8}>
                                        <Image src={service_val.img} alt={service_val.alt} className={styles.img}></Image>
                                    
                                    <div className={styles.service_info}>
                                        {service_val.service_info}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.latest_service_div}>
                                        <div>
                                            <p className={styles.latest_services_title}>
                                                Latest Services
                                            </p>
                                            {
                                                service_data.map(
                                                    (latest_val, index) => {
                                                        return <div className={styles.latest_services_info_div} key={index}
                                                            style={{ display: param_val.serviceid === latest_val.param ? 'none' : 'flex' }}>

                                                            <div>
                                                                <Image src={latest_val.img} alt={latest_val.alt} className={styles.latest_services_img} />

                                                            </div>
                                                            <div>
                                                                <Link href={`/yacht-services-goa/${latest_val.param}`} className={styles.latest_services_link}>
                                                                    {latest_val.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    }
                                                )
                                            }

                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    })}

                </Container>

            </section>
        </>
    )
}

export default Section2
