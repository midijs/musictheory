import {PERFECT_UNISON, MAJOR_THIRD, PERFECT_FIFTH, MINOR_THIRD,
	AUGMENTED_FIFTH, DIMINISHED_FIFTH, PERFECT_OCTAVE} from './intervals';
import Notes from './notes';

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

const CHORD_REGEX = /^([cdefgab]#?[0-9])(m|dim|aug)?$/i;

const MAJOR_FLAG = undefined;
const MINOR_FLAG = 'm';
const AUGMENTED_FLAG = 'aug';
const DIMINISHED_FLAG = 'dim';

var Qualities = {
	[MAJOR_FLAG]      : MAJOR_TRIAD,
	[MINOR_FLAG]      : MINOR_TRIAD,
	[AUGMENTED_FLAG]  : AUGMENTED_TRIAD,
	[DIMINISHED_FLAG] : DIMINISHED_TRIAD
};

function parseChord(chord) {
	var parsedChord = chord.match(CHORD_REGEX);
	var root = parsedChord[1];
	var quality = parsedChord[2];

	return {
		root    : Notes[root],
		quality : Qualities[quality]
	};
}

/**
 * Generates a chord.
 *
 * @param {string} chord       Chord C#4dim
 * @param {array} [inversion]    Chord inversion
 *
 * @returns {array}    Chord
 */
export function chord(chord, inversion = ROOT_POSITION) {
	var chordNotes = [];
	var parsedChord = parseChord(chord);

	parsedChord.quality.forEach(function(value, index) {
		chordNotes.push(value + parsedChord.root + inversion[index]);
	});

	return chordNotes;
};
