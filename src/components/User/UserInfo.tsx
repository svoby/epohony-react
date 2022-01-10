import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { IUser } from '../../global.types'
import { Spacer } from '../../layout/Grid'
import Placeholder from '../../layout/Placeholder'

const UserInfo = ({ user }: { user: IUser }) => {
    return (
        <>
            <Placeholder w="984" h="184" color='CCCCCC' imgClass='rounded img-fluid' />
            <Spacer size="pt-5" />

            <div className="card border border-2 border-300">
                <div className="card-header rounded-0 bg-300 p-4">
                    <h4>Osobní údaje</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="user-name">Jméno</label>
                                <input className="form-control" id="user-name" type="text" defaultValue={user?.name} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">Příjmení</label>
                                <input className="form-control" id="" type="text" defaultValue={user?.surname} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">Ulice a číslo</label>
                                <input className="form-control" id="" type="text" defaultValue={user?.street} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-8">
                                    <div className="form-group">
                                        <label className="font-weight-semibold" htmlFor="">Město</label>
                                        <input className="form-control" id="" type="text" defaultValue={user?.city} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="font-weight-semibold" htmlFor="">PSČ</label>
                                        <input className="form-control" id="" type="text" defaultValue={user?.psc} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">Telefon</label>
                                <input className="form-control" id="" type="text" defaultValue={user?.phone} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">E-mail</label>
                                <input className="form-control" id="" type="text" defaultValue={user?.email} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-header rounded-0 bg-300 p-4">
                    <h4>Heslo</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">Původní heslo</label>
                                <input className="form-control" id="" type="text" defaultValue="" placeholder="*******" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">Nové heslo</label>
                                <input className="form-control" id="" type="text" defaultValue="" placeholder="*******" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="font-weight-semibold" htmlFor="">Potvrzení nového hesla</label>
                                <input className="form-control" id="" type="text" defaultValue="" placeholder="*******" disabled />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer py-4 bg-secondary-alpha-20 border-secondary">
                    <button className="btn btn-secondary text-uppercase d-inline-flex align-items-center">Potvrdit změny
                        <ArrowRightIcon className='sx-16 ml-2' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserInfo