import * as React from 'react';
import { Icon, TooltipHost } from 'office-ui-fabric-react';
import { PropsInfoMark } from './IInfoMark';

const InfoMark: React.FunctionComponent<PropsInfoMark> = (props) => {
  let iconName = 'AlertSolid';
  if (props.iconName != null && props.iconName != '') iconName = props.iconName;

  let size = 'larger';
  if (props.size != null && props.size != '') size = props.size;

  return (
    <span style={{ cursor: 'help', fontSize: size }}>
      <TooltipHost content={props.label} calloutProps={{ gapSpace: 0 }}>
        <Icon iconName={iconName} />
      </TooltipHost>
    </span>
  );
};

export default InfoMark;
