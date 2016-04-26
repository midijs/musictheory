import {PERFECT_UNISON, MAJOR_THIRD, PERFECT_FIFTH, MINOR_THIRD,
	AUGMENTED_FIFTH, DIMINISHED_FIFTH, PERFECT_OCTAVE} from './intervals';
import {note} from './notes';

/* Chord qualities */
const MAJOR_TRIAD = [PERFECT_UNISON, MAJOR_THIRD, PERFECT_FIFTH];
const MINOR_TRIAD = [PERFECT_UNISON, MINOR_THIRD, PERFECT_FIFTH];
const AUGMENTED_TRIAD = [PERFECT_UNISON, MAJOR_THIRD, AUGMENTED_FIFTH];
const DIMINISHED_TRIAD = [PERFECT_UNISON, MINOR_THIRD, DIMINISHED_FIFTH];

/* Chord inversions */
const ROOT_POSITION = [PERFECT_UNISON, PERFECT_UNISON, PERFECT_UNISON];
const FIRST_INVERSION = [PERFECT_OCTAVE, PERFECT_UNISON, PERFECT_UNISON];
const SECOND_INVERSION = [PERFECT_OCTAVE, PERFECT_OCTAVE,
	PERFECT_UNISON];

const CHORD_REGEX = /^([cdefgab])#?([0-9]|)(M|m|maj|min|dim|aug|)$/i;

var Qualities = {
	''    : MAJOR_TRIAD,
	'M'   : MAJOR_TRIAD,
	'maj' : MAJOR_TRIAD,
	'm'   : MINOR_TRIAD,
	'min' : MINOR_TRIAD,
	'dim' : DIMINISHED_TRIAD,
	'aug' : AUGMENTED_TRIAD
};

var Inversions = {
	0 : ROOT_POSITION,
	1 : FIRST_INVERSION,
	2 : SECOND_INVERSION
};

/**
 * Generates a chord.
 *
 * @param {string} chord       Chord C#4dim
 * @param {array} [inversion]    Chord inversion
 *
 * @returns {array}    Chord
 */
export function chord(chord, inversion = 0) {
	var chordNotes = [];
	var [, root, octave, quality] = chord.match(CHORD_REGEX);

	if (octave === '') {
		octave = 4;
	}

	root = note(root + octave);
	quality = Qualities[quality];
	inversion = Inversions[inversion];

	quality.forEach(function(value, index) {
		chordNotes.push(value + root + inversion[index]);
	});

	return chordNotes;
};
