import * as React from 'react';
import layoutStyles from './inputayout.module.scss';
import { EInputLayoutType, EInputType, PropsInputLayout } from './IInputLayoutProps';
import InputComponentView from './inputComponentView';
import InfoMark from '../infoMark/infoMark';

const InputLayout = <T,>(props: PropsInputLayout<T>) => {
  // required input
  let required = false;
  if ('isRequired' in props) required = props.isRequired!;
  // hasIconMark input
  let hasIconMark = false;
  if ('hasIconMark' in props) hasIconMark = props.hasIconMark!;
  // label html
  let label = props.label;
  if (required) {
    label = label + ' <span style="color: #c52e3d; font-weight: bold;">*</span>';
  }
  // label className adder
  let addLabelClassName = false;
  if (props.component === EInputType.TextField || props.component === EInputType.PhoneNumber) {
    addLabelClassName = true;
  }

  let minValue = -1; // if props.min = -1 --> no min value
  if (props.min != null && props.min != undefined) minValue = props.min;
  let maxValue = 0; // if props.max = 0 --> no max value
  if (props.max != null && props.max != undefined) maxValue = props.max;

  return (
    <>
      {props.layoutType === EInputLayoutType.oneLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <span style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ flexGrow: 0.2 }} dangerouslySetInnerHTML={{ __html: label }}></span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ flexGrow: 1 }}>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </span>
              {hasIconMark ? (
                <span style={{ marginLeft: '5px' }}>
                  <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                </span>
              ) : (
                <></>
              )}
            </div>
          </span>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.veryVerySmallInputLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm10 ms-md10'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm2 ms-md2'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.verySmallInputLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm8 ms-md8'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.smallInputLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm7 ms-md7'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm5 ms-md5'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.middleLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm6 ms-md6'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-md6'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.smallMiddleLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm5 ms-md5'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm7 ms-md7'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.tierLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm8 ms-md8'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.quarterLine ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm3 ms-md3'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm9 ms-md9'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.smallLabel ? (
        <div className={layoutStyles.surchargeOnlineFormInput}>
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm2 ms-md2'>
                <div className={addLabelClassName ? layoutStyles.inputLabelTextFieldValign : ''} style={{ display: 'flex', alignItems: 'center' }}>
                  <span dangerouslySetInnerHTML={{ __html: label }} style={{ flexGrow: 1 }}></span>
                  {hasIconMark ? (
                    <span style={{ marginLeft: '5px' }}>
                      <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='ms-Grid-col ms-sm10 ms-md10'>
                <InputComponentView
                  component={props.component}
                  layoutType={props.layoutType}
                  label={props.label}
                  isReadOnly={props.isReadOnly}
                  // input spe
                  increment={props.increment}
                  suffix={props.suffix}
                  selectOptions={props.selectOptions}
                  onTextToogle={props.onTextToogle}
                  offTextToogle={props.offTextToogle}
                  isPrimaryColor={props.isPrimaryColor}
                  min={minValue}
                  max={maxValue}
                  // obj
                  objValue={props.objValue}
                  currentObj={props.currentObj}
                  objSetter={props.objSetter}
                  objPropertyName={props.objPropertyName}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.layoutType === EInputLayoutType.noLabel ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ flexGrow: 1 }}>
            <InputComponentView
              component={props.component}
              layoutType={props.layoutType}
              label={props.label}
              isReadOnly={props.isReadOnly}
              // input spe
              increment={props.increment}
              suffix={props.suffix}
              selectOptions={props.selectOptions}
              onTextToogle={props.onTextToogle}
              offTextToogle={props.offTextToogle}
              isPrimaryColor={props.isPrimaryColor}
              min={minValue}
              max={maxValue}
              // obj
              objValue={props.objValue}
              currentObj={props.currentObj}
              objSetter={props.objSetter}
              objPropertyName={props.objPropertyName}
            />
          </span>
          {hasIconMark ? (
            <span style={{ marginLeft: '5px' }}>
              <InfoMark label={props.infoMarkLabel!} iconName={props.infoMarkIconName} size={props.infoMarkSize} />
            </span>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputLayout;
