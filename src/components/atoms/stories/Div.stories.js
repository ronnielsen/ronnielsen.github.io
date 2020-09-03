import React from 'react';
import { Div, Button, Icon } from '../';
export default { title: 'atoms.Div' };

export const basic = () =>
    <Div>Hello</Div>;

export const controlsTR = () =>
    <div style={{ position: 'relative', backgroundColor: 'grey', height: '200px', width: '400px' }}>
        <Div variant="controlsTR">
            <Button variant="controlGhostDark"><Icon variant="forControls" name="info" /></Button>
            <Button variant="control" ><Icon variant="forControls" name="add" /></Button>
        </Div>
    </div >
    ;
