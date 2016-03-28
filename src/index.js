import * as Triads from './triads';
import * as Intervals from './intervals';
import * as Scales from './scales';
import * as Utils from './utils';

var MusicTheory = {
	Triads    : Triads,
	Intervals : Intervals,
	Scales    : Scales,
	Rythm     : Rythm,
};

Object.assign(MusicTheory, Utils);

export default MusicTheory;
