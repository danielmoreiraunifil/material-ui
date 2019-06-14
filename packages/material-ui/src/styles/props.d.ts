import { AppBarProps } from '../AppBar';
import { AvatarProps } from '../Avatar';
import { BackdropProps } from '../Backdrop';
import { BadgeProps } from '../Badge';
import { BottomNavigationActionProps } from '../BottomNavigationAction';
import { BottomNavigationProps } from '../BottomNavigation';
import { BreadcrumbsProps } from '../Breadcrumbs';
import { ButtonBaseProps } from '../ButtonBase';
import { ButtonProps } from '../Button';
import { ButtonGroupProps } from '../ButtonGroup';
import { CardActionsProps } from '../CardActions';
import { CardActionAreaProps } from '../CardActionArea';
import { CardContentProps } from '../CardContent';
import { CardHeaderProps } from '../CardHeader';
import { CardMediaProps } from '../CardMedia';
import { CardProps } from '../Card';
import { CheckboxProps } from '../Checkbox';
import { ChipProps } from '../Chip';
import { CircularProgressProps } from '../CircularProgress';
import { CollapseProps } from '../Collapse';
import { CssBaselineProps } from '../CssBaseline';
import { DialogActionsProps } from '../DialogActions';
import { DialogContentProps } from '../DialogContent';
import { DialogContentTextProps } from '../DialogContentText';
import { DialogProps } from '../Dialog';
import { DialogTitleProps } from '../DialogTitle';
import { DividerProps } from '../Divider';
import { DrawerProps } from '../Drawer';
import { ExpansionPanelActionsProps } from '../ExpansionPanelActions';
import { ExpansionPanelDetailsProps } from '../ExpansionPanelDetails';
import { ExpansionPanelProps } from '../ExpansionPanel';
import { ExpansionPanelSummaryProps } from '../ExpansionPanelSummary';
import { FormControlLabelProps } from '../FormControlLabel';
import { FormControlProps } from '../FormControl';
import { FormGroupProps } from '../FormGroup';
import { FormHelperTextProps } from '../FormHelperText';
import { FormLabelProps } from '../FormLabel';
import { GridListProps } from '../GridList';
import { GridListTileBarProps } from '../GridListTileBar';
import { GridListTileProps } from '../GridListTile';
import { GridProps } from '../Grid';
import { IconButtonProps } from '../IconButton';
import { IconProps } from '../Icon';
import { InputAdornmentProps } from '../InputAdornment';
import { InputLabelProps } from '../InputLabel';
import { InputProps } from '../Input';
import { LinearProgressProps } from '../LinearProgress';
import { LinkProps } from '../Link';
import { ListItemAvatarProps } from '../ListItemAvatar';
import { ListItemIconProps } from '../ListItemIcon';
import { ListItemProps } from '../ListItem';
import { ListItemSecondaryActionProps } from '../ListItemSecondaryAction';
import { ListItemTextProps } from '../ListItemText';
import { ListProps } from '../List';
import { ListSubheaderProps } from '../ListSubheader';
import { MenuItemProps } from '../MenuItem';
import { MenuListProps } from '../MenuList';
import { MenuProps } from '../Menu';
import { MobileStepperProps } from '../MobileStepper';
import { ModalProps } from '../Modal';
import { NativeSelectProps } from '../NativeSelect';
import { PaperProps } from '../Paper';
import { PopoverProps } from '../Popover';
import { RadioGroupProps } from '../RadioGroup';
import { RadioProps } from '../Radio';
import { SelectProps } from '../Select';
import { SnackbarContentProps } from '../SnackbarContent';
import { SnackbarProps } from '../Snackbar';
import { StepButtonProps } from '../StepButton';
import { StepConnectorProps } from '../StepConnector';
import { StepContentProps } from '../StepContent';
import { StepIconProps } from '../StepIcon';
import { StepLabelProps } from '../StepLabel';
import { StepperProps } from '../Stepper';
import { StepProps } from '../Step';
import { SvgIconProps } from '../SvgIcon';
import { SwitchBaseProps } from '../internal/SwitchBase';
import { SwitchProps } from '../Switch';
import { TableBodyProps } from '../TableBody';
import { TableCellProps } from '../TableCell';
import { TableHeadProps } from '../TableHead';
import { TablePaginationProps } from '../TablePagination';
import { TableProps } from '../Table';
import { TableRowProps } from '../TableRow';
import { TableSortLabelProps } from '../TableSortLabel';
import { TabProps } from '../Tab';
import { TabsProps } from '../Tabs';
import { TextFieldProps } from '../TextField';
import { ToolbarProps } from '../Toolbar';
import { TooltipProps } from '../Tooltip';
import { TouchRippleProps } from '../ButtonBase/TouchRipple';
import { TypographyProps } from '../Typography';
import { WithWidthOptions } from '../withWidth';

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>
};

export interface ComponentsPropsList {
  MuiAppBar: AppBarProps;
  MuiAvatar: AvatarProps;
  MuiBackdrop: BackdropProps;
  MuiBadge: BadgeProps;
  MuiBottomNavigation: BottomNavigationProps;
  MuiBottomNavigationAction: BottomNavigationActionProps;
  MuiBreadcrumbs: BreadcrumbsProps;
  MuiButton: ButtonProps;
  MuiButtonBase: ButtonBaseProps;
  MuiButtonGroup: ButtonGroupProps;
  MuiCard: CardProps;
  MuiCardActions: CardActionsProps;
  MuiCardActionArea: CardActionAreaProps;
  MuiCardContent: CardContentProps;
  MuiCardHeader: CardHeaderProps;
  MuiCardMedia: CardMediaProps;
  MuiCheckbox: CheckboxProps;
  MuiChip: ChipProps;
  MuiCircularProgress: CircularProgressProps;
  MuiCollapse: CollapseProps;
  MuiCssBaseline: CssBaselineProps;
  MuiDialog: DialogProps;
  MuiDialogActions: DialogActionsProps;
  MuiDialogContent: DialogContentProps;
  MuiDialogContentText: DialogContentTextProps;
  MuiDialogTitle: DialogTitleProps;
  MuiDivider: DividerProps;
  MuiDrawer: DrawerProps;
  MuiExpansionPanel: ExpansionPanelProps;
  MuiExpansionPanelActions: ExpansionPanelActionsProps;
  MuiExpansionPanelDetails: ExpansionPanelDetailsProps;
  MuiExpansionPanelSummary: ExpansionPanelSummaryProps;
  MuiFormControl: FormControlProps;
  MuiFormControlLabel: FormControlLabelProps;
  MuiFormGroup: FormGroupProps;
  MuiFormHelperText: FormHelperTextProps;
  MuiFormLabel: FormLabelProps;
  MuiGrid: GridProps;
  MuiGridList: GridListProps;
  MuiGridListTile: GridListTileProps;
  MuiGridListTileBar: GridListTileBarProps;
  MuiIcon: IconProps;
  MuiIconButton: IconButtonProps;
  MuiInput: InputProps;
  MuiInputAdornment: InputAdornmentProps;
  MuiInputLabel: InputLabelProps;
  MuiLinearProgress: LinearProgressProps;
  MuiLink: LinkProps;
  MuiList: ListProps;
  MuiListItem: ListItemProps;
  MuiListItemAvatar: ListItemAvatarProps;
  MuiListItemIcon: ListItemIconProps;
  MuiListItemSecondaryAction: ListItemSecondaryActionProps;
  MuiListItemText: ListItemTextProps;
  MuiListSubheader: ListSubheaderProps;
  MuiMenu: MenuProps;
  MuiMenuItem: MenuItemProps;
  MuiMenuList: MenuListProps;
  MuiMobileStepper: MobileStepperProps;
  MuiModal: ModalProps;
  MuiNativeSelect: NativeSelectProps;
  MuiPaper: PaperProps;
  MuiPopover: PopoverProps;
  MuiRadio: RadioProps;
  MuiRadioGroup: RadioGroupProps;
  MuiSelect: SelectProps;
  MuiSnackbar: SnackbarProps;
  MuiSnackbarContent: SnackbarContentProps;
  MuiStep: StepProps;
  MuiStepButton: StepButtonProps;
  MuiStepConnector: StepConnectorProps;
  MuiStepContent: StepContentProps;
  MuiStepIcon: StepIconProps;
  MuiStepLabel: StepLabelProps;
  MuiStepper: StepperProps;
  MuiSvgIcon: SvgIconProps;
  MuiSwitch: SwitchProps;
  MuiSwitchBase: SwitchBaseProps;
  MuiTab: TabProps;
  MuiTable: TableProps;
  MuiTableBody: TableBodyProps;
  MuiTableCell: TableCellProps;
  MuiTableHead: TableHeadProps;
  MuiTablePagination: TablePaginationProps;
  MuiTableRow: TableRowProps;
  MuiTableSortLabel: TableSortLabelProps;
  MuiTabs: TabsProps;
  MuiTextField: TextFieldProps;
  MuiToolbar: ToolbarProps;
  MuiTooltip: TooltipProps;
  MuiTouchRipple: TouchRippleProps;
  MuiTypography: TypographyProps;
  MuiWithWidth: WithWidthOptions;
}
