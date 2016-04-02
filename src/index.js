import {chord} from './chord';
import * as Intervals from './intervals';
import * as Scales from './scales';
import * as Utils from './utils';
import * as Rythm from './rythm';

var MusicTheory = {
	chord     : chord,
	Intervals : Intervals,
	Scales    : Scales,
	Rythm     : Rythm,
};

Object.assign(MusicTheory, Utils);

export default MusicTheory;
