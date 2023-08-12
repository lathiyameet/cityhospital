
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../../reducx/Slice/alertSlice';
import { enqueueSnackbar } from 'notistack';

function Alert(props) {
    const alert = useSelector(state => state.alert)
    const Dispatch = useDispatch()  

    console.log(alert);

    useEffect(() => {
        if (alert.text !== '') {
          enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            })
        }

        const Time = setTimeout(() => {
            Dispatch(resetAlert())
        }, 2000);

        return () => {
            clearTimeout(Time)
        }
    }, [alert.text])

    
    return (
        <div>

        </div>
    );
}

export default Alert;