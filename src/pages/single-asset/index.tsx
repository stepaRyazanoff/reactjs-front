import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export const SingleAsset = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
            <div>
              Single asset  {id}
              <div
                      style={{cursor: 'pointer'}}
                      onClick={() => navigate(-1)}
              >
                  Go back &larr;
              </div>
            </div>
    );
};

