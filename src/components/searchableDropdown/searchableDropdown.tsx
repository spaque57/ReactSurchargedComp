import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles, SearchBox } from 'office-ui-fabric-react';
import * as React from 'react';
import { updateDropdownInputData } from '../../services/inputService';
import { ISearchedDropdownProps } from './ISeachedDropdowProps';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdownItems: { maxHeight: 300, overflowY: 'auto' }
};

const SearchableDropdown = <T,>(props: ISearchedDropdownProps<T>) => {
  const [searchText, setSearchText] = React.useState<string>('');

  function renderOption(option?: IDropdownOption): JSX.Element {
    return option!.itemType === DropdownMenuItemType.Header && option!.key === 'FilterHeader' ? (
      <SearchBox onChange={(newValue) => setSearchText(newValue)} underlined={true} placeholder='Rechercher...' />
    ) : (
      <>{option!.text}</>
    );
  }

  return (
    <Dropdown
      {...props}
      options={[
        { key: 'FilterHeader', text: '-', itemType: DropdownMenuItemType.Header },
        { key: 'dividerHeader', text: '-', itemType: DropdownMenuItemType.Divider },
        ...props.options.map((option) => (!option.disabled && option.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ? option : { ...option, hidden: true }))
      ]}
      calloutProps={{ shouldRestoreFocus: false, setInitialFocus: false }}
      onRenderOption={renderOption}
      onDismiss={() => setSearchText('')}
      onChange={(e: React.FormEvent<HTMLDivElement>, option: IDropdownOption | undefined) => {
        if (option != null && option != undefined) updateDropdownInputData(e, option, props.currentObject, props.setter, props.propertieName);
      }}
      multiSelect={false}
      selectedKey={props.value}
      styles={dropdownStyles}
    />
  );
};

export default SearchableDropdown;
