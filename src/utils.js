import {ROOT_POSITION} from './triads';

/**
 * Generates a chord.
 *
 * @param {number} root        Root note
 * @param {array} quality      Chord quality
 * @param {array} inversion    Chord inversion
 *
 * @returns {array}    Chord
 */
export function chord(root, quality, inversion) {
	if (typeof inversion === 'undefined') {
		inversion = ROOT_POSITION;
	}

	var chord = [];

	quality.forEach(function(value, index) {
		newChord.push(value + root + inversion[index]);
	});

	return chord;
};

/**
 * Generates a scale.
 *
 * @param {number} root    Root note
 * @param {array} scale    Scale type
 *
 * @returns {array}    Scale
 */
export function scale(root, scale) {
	var newScale = [root];

	scale.forEach(function(value, index) {
		if (index === 0) {
			newSacale.push(value + root);
		}
		else {
			newScale.push(newScale[index - 1] + value + root);
		}
	});

	return newScale;
};

/**
 * Increases the relative duration of the specified note by adding modifier
 * dots.
 *
 * @param {number} note    Relative duration of the note.
 * @param {number} dots    Number of dots to add to the note.
 *
 * @returns {number}
 */
export function dotted(note, dots) {
	return note + ((Math.pow(2, dots) - 1) / Math.pow(2, dots));
};
