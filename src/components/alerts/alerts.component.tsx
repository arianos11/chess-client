import React from 'react';
// import { Alert } from 'reactstrap';
// import { useSelector, useDispatch } from 'react-redux';

// import { closeAlert, deleteAlert } from '../../redux/utils/utils.actions';

import './alerts.styles.scss';

export interface IAlert {
  id: string;
  type: string;
  open: boolean;
  message?: string;
}

const Alerts = () => {
  // const dispatch = useDispatch();
  // const alerts = useSelector(state => state.utils.alerts);

  // const closeAlertAnimated = (id) => {
  //   dispatch(closeAlert(id));
  //   setTimeout(() => {
  //     dispatch(deleteAlert(id));
  //   }, 500)
  // };

  return (
    <div className="alerts">
      <p>Alert</p>
      {/* {
        alerts && alerts.map(alert => (
        <Alert color={alert.type} key={alert.id} isOpen={alert.open} toggle={() => closeAlertAnimated(alert.id)}>
          <p>{alert.message}</p>
          <p>{alert.id}</p>
        </Alert>
        ))
      } */}
    </div>
  );
};

export default Alerts;
