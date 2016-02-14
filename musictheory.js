
var Music = {
	/**************************************************************************
	 * Chromatic intervals
	 **************************************************************************/

	/* Minor, major or perfect intervals */
	PERFECT_UNISON : 0,
	MINOR_SECOND   : 1,
	MAJOR_SECOND   : 2,
	MINOR_THIRD    : 3,
	MAJOR_THIRD    : 4,
	PERFECT_FOURTH : 5,
	PERFECT_FIFTH  : 7,
	MINOR_SIXTH    : 8,
	MAJOR_SIXTH    : 9,
	MINOR_SEVENTH  : 10,
	MAJOR_SEVENTH  : 11,
	PERFECT_OCTAVE : 12,

	/* Augmented or diminished intervals */
	DIMINISHED_SECOND  : 0,
	AUGMENTED_UNISON   : 1,
	DIMINISHED_THIRD   : 2,
	AUGMENTED_SECOND   : 3,
	DIMINISHED_FOURTH  : 4,
	AUGMENTED_THIRD    : 5,
	DIMINISHED_FIFTH   : 6,
	AUGMENTED_FOURTH   : 6,
	DIMINISHED_SIXTH   : 7,
	AUGMENTED_FIFTH    : 8,
	DIMINISHED_SEVENTH : 9,
	AUGMENTED_SIXTH    : 10,
	DIMINISHED_OCTAVE  : 11,
	AUGMENTED_SEVENTH  : 12,

	/* Alternative names */
	SEMITONE : 1,
	TONE     : 2,
	TRITONE  : 6,

	/**************************************************************************
	 * Chords
	 **************************************************************************/

	/* Triads */
	MAJOR_TRIAD      : [Music.PERFECT_UNISON, Music.MAJOR_THIRD, Music.PERFECT_FIFTH],
	MINOR_TRIAD      : [Music.PERFECT_UNISON, Music.MINOR_THIRD, Music.PERFECT_FIFTH],
	AUGMENTED_TRIAD  : [Music.PERFECT_UNISON, Music.MAJOR_THIRD, Music.AUGMENTED_FIFTH],
	DIMINISHED_TRIAD : [Music.PERFECT_UNISON, Music.MINOR_THIRD, Music.DIMINISHED_FIFTH],

	/* Tertian seventh chords */
	MAJOR_SEVENTH           : Music.MAJOR_TRIAD.concat(Music.MAJOR_SEVENTH),
	MINOR_SEVENTH           : Music.MAJOR_TRIAD.concat(Music.MINOR_SEVENTH),
	DOMINANT_SEVENTH        : Music.MAJOR_TRIAD.concat(Music.MINOR_SEVENTH),
	DIMINISHED_SEVENTH      : Music.DIMINISHED_TRIAD.concat(Music.DIMINISHED_SEVENTH),
	HALF_DIMINISHED_SEVENTH : Music.DIMINISHED_TRIAD.concat(Music.MINOR_SEVENTH),
	MINOR_MAJOR_SEVENTH     : Music.MINOR_TRIAD.concat(Music.MAJOR_SEVENTH),
	AUGMENTED_MAJOR_SEVENTH : Music.AUGMENTED_TRIAD.concat(Music.MAJOR_SEVENTH),

	/* Non-tertian seventh chords */
	AUGMENTED_SEVENTH          : Music.AUGMENTED_TRIAD.concat(Music.MINOR_SEVENTH),
	DIMINISHED_MAJOR_SEVENTH   : Music.DIMINISHED_TRIAD.concat(Music.MAJOR_SEVENTH),
	DOMINANT_SEVENTH_FLAT_FIVE : Music.DIMINISHED_TRIAD.concat(Music.MINOR_SEVENTH),

	/* Inversions */
	ROOT_POSITION    : [Music.PERFECT_UNISON, Music.PERFECT_UNISON, Music.PERFECT_UNISON],
	FIRST_INVERSION  : [Music.PERFECT_OCTAVE, Music.PERFECT_UNISON, Music.PERFECT_UNISON],
	SECOND_INVERSION : [Music.PERFECT_OCTAVE, Music.PERFECT_OCTAVE, Music.PERFECT_UNISON],

	/**************************************************************************
	 * Helper functions
	 **************************************************************************/

	/**
	 * Generates a chord.
	 *
	 * @param {number} root        Root note
	 * @param {array} chord        Chord type
	 * @param {array} inversion    Chord inversion
	 *
	 * @returns {array}    Chord
	 */
	generateChord(root, chord, inversion) {
		if (typeof inversion === 'undefined') {
			inversion = Music.ROOT_POSITION;
		}

		var newChord = [];

		chord.forEach(function(value, index) {
			newChord.push(value + root + inversion[index]);
		});

		return newChord;
	}
};

module.exports = Music;
