import React from 'react';

import './planned-litters-btn.css';

class PlannedLittersBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/planned-litters">
                    <button type="button" class="btn btn-outline-primary">
                        Planned Litters
                    </button>
                </a>
            </div>
        )
    }
};

export default PlannedLittersBtn;