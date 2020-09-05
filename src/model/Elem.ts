import {ElemConst} from './ElemConst';
import {ElemPlus} from './ElemPlus';
import {ElemDiv} from './ElemDiv';

export type Elem = ElemPlus | ElemConst | ElemDiv;
