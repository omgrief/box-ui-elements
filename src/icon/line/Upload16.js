// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../icons/accessible-svg';
import type { Icon } from '../../icons/flowTypes';

const Upload16 = (props: Icon) => (
    <AccessibleSVG width={16} height={16} viewBox="0 0 16 16" {...props}>
        <path
            fill="#222"
            fillRule="evenodd"
            d="M14 14v1H2v-1h12zM8 1l6 6.003h-3.004V12H5.004V7.003H2L8 1zm0 1.413l-3.589 3.59h1.591v4.998h3.996V6.004h1.59L8 2.414z"
        />
    </AccessibleSVG>
);

export default Upload16;