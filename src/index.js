import {chord, registerChord} from './chords';
import {scale, registerScale} from './scales';
import {note} from './notes';
import {arpeggio} from './arpeggio';

var MusicTheory = {
	chord    : chord,
	note     : note,
	arpeggio : arpeggio,
	scale    : scale,
	registerScale : registerScale,
	registerChord : registerChord
};

export default MusicTheory;
