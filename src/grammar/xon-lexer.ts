// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
    import { XonLexerBase } from "./xon-lexer-base";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonLexer extends XonLexerBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly IS = 9;
	public static readonly AS = 10;
	public static readonly DO = 11;
	public static readonly IF = 12;
	public static readonly IN = 13;
	public static readonly FOR = 14;
	public static readonly ELSE = 15;
	public static readonly TEST = 16;
	public static readonly BREAK = 17;
	public static readonly INFIX = 18;
	public static readonly WHILE = 19;
	public static readonly ACTUAL = 20;
	public static readonly EXPECT = 21;
	public static readonly EXPORT = 22;
	public static readonly IMPORT = 23;
	public static readonly PREFIX = 24;
	public static readonly RETURN = 25;
	public static readonly POSTFIX = 26;
	public static readonly EXTENSION = 27;
	public static readonly AT = 28;
	public static readonly DOT = 29;
	public static readonly RANGE = 30;
	public static readonly SPREAD = 31;
	public static readonly PLUS = 32;
	public static readonly HASH = 33;
	public static readonly PIPE = 34;
	public static readonly LESS = 35;
	public static readonly LESS_EQUAL = 36;
	public static readonly COMMA = 37;
	public static readonly COLON = 38;
	public static readonly GREAT = 39;
	public static readonly GREAT_EQUAL = 40;
	public static readonly MINUS = 41;
	public static readonly SLASH = 42;
	public static readonly CARET = 43;
	public static readonly TILDE = 44;
	public static readonly ASSIGN = 45;
	public static readonly EQUAL = 46;
	public static readonly NOT_EQUAL = 47;
	public static readonly MODULO = 48;
	public static readonly QUESTION = 49;
	public static readonly COALESCING = 50;
	public static readonly ASTERISK = 51;
	public static readonly AMPERSAND = 52;
	public static readonly AND = 53;
	public static readonly OR = 54;
	public static readonly UNDERSCORE = 55;
	public static readonly EXCLAMATION = 56;
	public static readonly BACK_SLASH = 57;
	public static readonly INSTANCE = 58;
	public static readonly INSTANCE_MEMBER = 59;
	public static readonly FLOAT_LITERAL = 60;
	public static readonly INTEGER_LITERAL = 61;
	public static readonly CHAR_LITERAL = 62;
	public static readonly STRING_LITERAL = 63;
	public static readonly REGEX_LITERAL = 64;
	public static readonly PREPROCESSOR = 65;
	public static readonly UPPER_ID = 66;
	public static readonly LOWER_ID = 67;
	public static readonly NL = 68;
	public static readonly WS = 69;
	public static readonly COMMENT = 70;
	public static readonly ERROR = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", "FOR", "ELSE", "TEST", "BREAK", 
		"INFIX", "WHILE", "ACTUAL", "EXPECT", "EXPORT", "IMPORT", "PREFIX", "RETURN", 
		"POSTFIX", "EXTENSION", "AT", "DOT", "RANGE", "SPREAD", "PLUS", "HASH", 
		"PIPE", "LESS", "LESS_EQUAL", "COMMA", "COLON", "GREAT", "GREAT_EQUAL", 
		"MINUS", "SLASH", "CARET", "TILDE", "ASSIGN", "EQUAL", "NOT_EQUAL", "MODULO", 
		"QUESTION", "COALESCING", "ASTERISK", "AMPERSAND", "AND", "OR", "UNDERSCORE", 
		"EXCLAMATION", "BACK_SLASH", "INSTANCE", "INSTANCE_MEMBER", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "REGEX_LITERAL", 
		"PREPROCESSOR", "UPPER_ID", "LOWER_ID", "NL", "WS", "COMMENT", "DigitNumber", 
		"AlphabetNumber",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'test'", "'break'", 
		"'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'@'", "'.'", "'..'", 
		"'...'", "'+'", "'#'", "'|'", "'<'", "'<='", "','", "':'", "'>'", "'>='", 
		"'-'", "'/'", "'^'", "'~'", "'='", "'=='", "'!='", "'%'", "'?'", "'?.'", 
		"'*'", "'&'", "'&&'", "'||'", "'_'", "'!'", "'\\'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "AT", 
		"DOT", "RANGE", "SPREAD", "PLUS", "HASH", "PIPE", "LESS", "LESS_EQUAL", 
		"COMMA", "COLON", "GREAT", "GREAT_EQUAL", "MINUS", "SLASH", "CARET", "TILDE", 
		"ASSIGN", "EQUAL", "NOT_EQUAL", "MODULO", "QUESTION", "COALESCING", "ASTERISK", 
		"AMPERSAND", "AND", "OR", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "INSTANCE", 
		"INSTANCE_MEMBER", "FLOAT_LITERAL", "INTEGER_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "REGEX_LITERAL", "PREPROCESSOR", "UPPER_ID", "LOWER_ID", 
		"NL", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonLexer._LITERAL_NAMES, XonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XonLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 0:
			this.OPEN_BRACKET_action(_localctx, actionIndex);
			break;

		case 1:
			this.CLOSE_BRACKET_action(_localctx, actionIndex);
			break;

		case 2:
			this.OPEN_PAREN_action(_localctx, actionIndex);
			break;

		case 3:
			this.CLOSE_PAREN_action(_localctx, actionIndex);
			break;

		case 4:
			this.OPEN_BRACE_action(_localctx, actionIndex);
			break;

		case 5:
			this.CLOSE_BRACE_action(_localctx, actionIndex);
			break;

		case 65:
			this.NL_action(_localctx, actionIndex);
			break;
		}
	}
	private OPEN_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened--;
			break;
		}
	}
	private OPEN_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened++;
			break;
		}
	}
	private CLOSE_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened--;
			break;
		}
	}
	private OPEN_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened--;
			break;
		}
	}
	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.handleLineBreak()
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 65:
			return this.NL_sempred(_localctx, predIndex);
		}
		return true;
	}
	private NL_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02H\u01E4\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03," +
		"\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x03" +
		"1\x032\x032\x033\x033\x034\x034\x034\x035\x035\x035\x036\x036\x037\x03" +
		"7\x038\x038\x039\x039\x03:\x03:\x03:\x03;\x03;\x05;\u015A\n;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u0165\n;\x03<\x03<\x05<\u0169" +
		"\n<\x03<\x03<\x03<\x05<\u016E\n<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03" +
		">\x07>\u0178\n>\f>\x0E>\u017B\v>\x03>\x03>\x03?\x03?\x03?\x03?\x07?\u0183" +
		"\n?\f?\x0E?\u0186\v?\x03?\x03?\x03@\x03@\x03@\x03@\x07@\u018E\n@\f@\x0E" +
		"@\u0191\v@\x03@\x03@\x03A\x03A\x07A\u0197\nA\fA\x0EA\u019A\vA\x03B\x03" +
		"B\x07B\u019E\nB\fB\x0EB\u01A1\vB\x03C\x03C\x03C\x05C\u01A6\nC\x03C\x03" +
		"C\x05C\u01AA\nC\x03C\x05C\u01AD\nC\x05C\u01AF\nC\x03C\x03C\x03D\x06D\u01B4" +
		"\nD\rD\x0ED\u01B5\x03D\x03D\x03E\x03E\x03E\x03E\x07E\u01BE\nE\fE\x0EE" +
		"\u01C1\vE\x03E\x03E\x03F\x06F\u01C6\nF\rF\x0EF\u01C7\x03F\x03F\x06F\u01CC" +
		"\nF\rF\x0EF\u01CD\x07F\u01D0\nF\fF\x0EF\u01D3\vF\x03G\x06G\u01D6\nG\r" +
		"G\x0EG\u01D7\x03G\x03G\x06G\u01DC\nG\rG\x0EG\u01DD\x07G\u01E0\nG\fG\x0E" +
		"G\u01E3\vG\x03\u018F\x02\x02H\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02" +
		"\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F" +
		"\x19\x02\x10\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02" +
		"\x16\'\x02\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5" +
		"\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02" +
		"(K\x02)M\x02*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x02" +
		"4c\x025e\x026g\x027i\x028k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02" +
		"@{\x02A}\x02B\x7F\x02C\x81\x02D\x83\x02E\x85\x02F\x87\x02G\x89\x02H\x8B" +
		"\x02\x02\x8D\x02\x02\x03\x02\x0F\x03\x022;\x04\x02ZZzz\x03\x02$$\x03\x02" +
		"))\n\x02))^^ddhhppttvvxx\x03\x02bb\x04\x02^^bb\x03\x02C\\\x06\x022;C\\" +
		"aac|\x04\x02aac|\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x05\x022;C\\c|\x02" +
		"\u01F8\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
		"\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
		"\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
		"\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
		"\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
		"\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
		";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02" +
		"\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02" +
		"\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03" +
		"\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02" +
		"\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02" +
		"]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02" +
		"\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02" +
		"\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03" +
		"\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02" +
		"\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02" +
		"\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02" +
		"\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x03" +
		"\x8F\x03\x02\x02\x02\x05\x92\x03\x02\x02\x02\x07\x95\x03\x02\x02\x02\t" +
		"\x98\x03\x02\x02\x02\v\x9B\x03\x02\x02\x02\r\x9E\x03\x02\x02\x02\x0F\xA1" +
		"\x03\x02\x02\x02\x11\xA4\x03\x02\x02\x02\x13\xA7\x03\x02\x02\x02\x15\xAA" +
		"\x03\x02\x02\x02\x17\xAD\x03\x02\x02\x02\x19\xB0\x03\x02\x02\x02\x1B\xB4" +
		"\x03\x02\x02\x02\x1D\xB9\x03\x02\x02\x02\x1F\xBE\x03\x02\x02\x02!\xC4" +
		"\x03\x02\x02\x02#\xCA\x03\x02\x02\x02%\xD0\x03\x02\x02\x02\'\xD7\x03\x02" +
		"\x02\x02)\xDE\x03\x02\x02\x02+\xE5\x03\x02\x02\x02-\xEC\x03\x02\x02\x02" +
		"/\xF3\x03\x02\x02\x021\xFA\x03\x02\x02\x023\u0102\x03\x02\x02\x025\u010C" +
		"\x03\x02\x02\x027\u010E\x03\x02\x02\x029\u0110\x03\x02\x02\x02;\u0113" +
		"\x03\x02\x02\x02=\u0117\x03\x02\x02\x02?\u0119\x03\x02\x02\x02A\u011B" +
		"\x03\x02\x02\x02C\u011D\x03\x02\x02\x02E\u011F\x03\x02\x02\x02G\u0122" +
		"\x03\x02\x02\x02I\u0124\x03\x02\x02\x02K\u0126\x03\x02\x02\x02M\u0128" +
		"\x03\x02\x02\x02O\u012B\x03\x02\x02\x02Q\u012D\x03\x02\x02\x02S\u012F" +
		"\x03\x02\x02\x02U\u0131\x03\x02\x02\x02W\u0133\x03\x02\x02\x02Y\u0135" +
		"\x03\x02\x02\x02[\u0138\x03\x02\x02\x02]\u013B\x03\x02\x02\x02_\u013D" +
		"\x03\x02\x02\x02a\u013F\x03\x02\x02\x02c\u0142\x03\x02\x02\x02e\u0144" +
		"\x03\x02\x02\x02g\u0146\x03\x02\x02\x02i\u0149\x03\x02\x02\x02k\u014C" +
		"\x03\x02\x02\x02m\u014E\x03\x02\x02\x02o\u0150\x03\x02\x02\x02q\u0152" +
		"\x03\x02\x02\x02s\u0154\x03\x02\x02\x02u\u0164\x03\x02\x02\x02w\u016D" +
		"\x03\x02\x02\x02y\u016F\x03\x02\x02\x02{\u0173\x03\x02\x02\x02}\u017E" +
		"\x03\x02\x02\x02\x7F\u0189\x03\x02\x02\x02\x81\u0194\x03\x02\x02\x02\x83" +
		"\u019B\x03\x02\x02\x02\x85\u01AE\x03\x02\x02\x02\x87\u01B3\x03\x02\x02" +
		"\x02\x89\u01B9\x03\x02\x02\x02\x8B\u01C5\x03\x02\x02\x02\x8D\u01D5\x03" +
		"\x02\x02\x02\x8F\x90\x07]\x02\x02\x90\x91\b\x02\x02\x02\x91\x04\x03\x02" +
		"\x02\x02\x92\x93\x07_\x02\x02\x93\x94\b\x03\x03\x02\x94\x06\x03\x02\x02" +
		"\x02\x95\x96\x07*\x02\x02\x96\x97\b\x04\x04\x02\x97\b\x03\x02\x02\x02" +
		"\x98\x99\x07+\x02\x02\x99\x9A\b\x05\x05\x02\x9A\n\x03\x02\x02\x02\x9B" +
		"\x9C\x07}\x02\x02\x9C\x9D\b\x06\x06\x02\x9D\f\x03\x02\x02\x02\x9E\x9F" +
		"\x07\x7F\x02\x02\x9F\xA0\b\x07\x07\x02\xA0\x0E\x03\x02\x02\x02\xA1\xA2" +
		"\x07k\x02\x02\xA2\xA3\x07u\x02\x02\xA3\x10\x03\x02\x02\x02\xA4\xA5\x07" +
		"c\x02\x02\xA5\xA6\x07u\x02\x02\xA6\x12\x03\x02\x02\x02\xA7\xA8\x07f\x02" +
		"\x02\xA8\xA9\x07q\x02\x02\xA9\x14\x03\x02\x02\x02\xAA\xAB\x07k\x02\x02" +
		"\xAB\xAC\x07h\x02\x02\xAC\x16\x03\x02\x02\x02\xAD\xAE\x07k\x02\x02\xAE" +
		"\xAF\x07p\x02\x02\xAF\x18\x03\x02\x02\x02\xB0\xB1\x07h\x02\x02\xB1\xB2" +
		"\x07q\x02\x02\xB2\xB3\x07t\x02\x02\xB3\x1A\x03\x02\x02\x02\xB4\xB5\x07" +
		"g\x02\x02\xB5\xB6\x07n\x02\x02\xB6\xB7\x07u\x02\x02\xB7\xB8\x07g\x02\x02" +
		"\xB8\x1C\x03\x02\x02\x02\xB9\xBA\x07v\x02\x02\xBA\xBB\x07g\x02\x02\xBB" +
		"\xBC\x07u\x02\x02\xBC\xBD\x07v\x02\x02\xBD\x1E\x03\x02\x02\x02\xBE\xBF" +
		"\x07d\x02\x02\xBF\xC0\x07t\x02\x02\xC0\xC1\x07g\x02\x02\xC1\xC2\x07c\x02" +
		"\x02\xC2\xC3\x07m\x02\x02\xC3 \x03\x02\x02\x02\xC4\xC5\x07k\x02\x02\xC5" +
		"\xC6\x07p\x02\x02\xC6\xC7\x07h\x02\x02\xC7\xC8\x07k\x02\x02\xC8\xC9\x07" +
		"z\x02\x02\xC9\"\x03\x02\x02\x02\xCA\xCB\x07y\x02\x02\xCB\xCC\x07j\x02" +
		"\x02\xCC\xCD\x07k\x02\x02\xCD\xCE\x07n\x02\x02\xCE\xCF\x07g\x02\x02\xCF" +
		"$\x03\x02\x02\x02\xD0\xD1\x07c\x02\x02\xD1\xD2\x07e\x02\x02\xD2\xD3\x07" +
		"v\x02\x02\xD3\xD4\x07w\x02\x02\xD4\xD5\x07c\x02\x02\xD5\xD6\x07n\x02\x02" +
		"\xD6&\x03\x02\x02\x02\xD7\xD8\x07g\x02\x02\xD8\xD9\x07z\x02\x02\xD9\xDA" +
		"\x07r\x02\x02\xDA\xDB\x07g\x02\x02\xDB\xDC\x07e\x02\x02\xDC\xDD\x07v\x02" +
		"\x02\xDD(\x03\x02\x02\x02\xDE\xDF\x07g\x02\x02\xDF\xE0\x07z\x02\x02\xE0" +
		"\xE1\x07r\x02\x02\xE1\xE2\x07q\x02\x02\xE2\xE3\x07t\x02\x02\xE3\xE4\x07" +
		"v\x02\x02\xE4*\x03\x02\x02\x02\xE5\xE6\x07k\x02\x02\xE6\xE7\x07o\x02\x02" +
		"\xE7\xE8\x07r\x02\x02\xE8\xE9\x07q\x02\x02\xE9\xEA\x07t\x02\x02\xEA\xEB" +
		"\x07v\x02\x02\xEB,\x03\x02\x02\x02\xEC\xED\x07r\x02\x02\xED\xEE\x07t\x02" +
		"\x02\xEE\xEF\x07g\x02\x02\xEF\xF0\x07h\x02\x02\xF0\xF1\x07k\x02\x02\xF1" +
		"\xF2\x07z\x02\x02\xF2.\x03\x02\x02\x02\xF3\xF4\x07t\x02\x02\xF4\xF5\x07" +
		"g\x02\x02\xF5\xF6\x07v\x02\x02\xF6\xF7\x07w\x02\x02\xF7\xF8\x07t\x02\x02" +
		"\xF8\xF9\x07p\x02\x02\xF90\x03\x02\x02\x02\xFA\xFB\x07r\x02\x02\xFB\xFC" +
		"\x07q\x02\x02\xFC\xFD\x07u\x02\x02\xFD\xFE\x07v\x02\x02\xFE\xFF\x07h\x02" +
		"\x02\xFF\u0100\x07k\x02\x02\u0100\u0101\x07z\x02\x02\u01012\x03\x02\x02" +
		"\x02\u0102\u0103\x07g\x02\x02\u0103\u0104\x07z\x02\x02\u0104\u0105\x07" +
		"v\x02\x02\u0105\u0106\x07g\x02\x02\u0106\u0107\x07p\x02\x02\u0107\u0108" +
		"\x07u\x02\x02\u0108\u0109\x07k\x02\x02\u0109\u010A\x07q\x02\x02\u010A" +
		"\u010B\x07p\x02\x02\u010B4\x03\x02\x02\x02\u010C\u010D\x07B\x02\x02\u010D" +
		"6\x03\x02\x02\x02\u010E\u010F\x070\x02\x02\u010F8\x03\x02\x02\x02\u0110" +
		"\u0111\x070\x02\x02\u0111\u0112\x070\x02\x02\u0112:\x03\x02\x02\x02\u0113" +
		"\u0114\x070\x02\x02\u0114\u0115\x070\x02\x02\u0115\u0116\x070\x02\x02" +
		"\u0116<\x03\x02\x02\x02\u0117\u0118\x07-\x02\x02\u0118>\x03\x02\x02\x02" +
		"\u0119\u011A\x07%\x02\x02\u011A@\x03\x02\x02\x02\u011B\u011C\x07~\x02" +
		"\x02\u011CB\x03\x02\x02\x02\u011D\u011E\x07>\x02\x02\u011ED\x03\x02\x02" +
		"\x02\u011F\u0120\x07>\x02\x02\u0120\u0121\x07?\x02\x02\u0121F\x03\x02" +
		"\x02\x02\u0122\u0123\x07.\x02\x02\u0123H\x03\x02\x02\x02\u0124\u0125\x07" +
		"<\x02\x02\u0125J\x03\x02\x02\x02\u0126\u0127\x07@\x02\x02\u0127L\x03\x02" +
		"\x02\x02\u0128\u0129\x07@\x02\x02\u0129\u012A\x07?\x02\x02\u012AN\x03" +
		"\x02\x02\x02\u012B\u012C\x07/\x02\x02\u012CP\x03\x02\x02\x02\u012D\u012E" +
		"\x071\x02\x02\u012ER\x03\x02\x02\x02\u012F\u0130\x07`\x02\x02\u0130T\x03" +
		"\x02\x02\x02\u0131\u0132\x07\x80\x02\x02\u0132V\x03\x02\x02\x02\u0133" +
		"\u0134\x07?\x02\x02\u0134X\x03\x02\x02\x02\u0135\u0136\x07?\x02\x02\u0136" +
		"\u0137\x07?\x02\x02\u0137Z\x03\x02\x02\x02\u0138\u0139\x07#\x02\x02\u0139" +
		"\u013A\x07?\x02\x02\u013A\\\x03\x02\x02\x02\u013B\u013C\x07\'\x02\x02" +
		"\u013C^\x03\x02\x02\x02\u013D\u013E\x07A\x02\x02\u013E`\x03\x02\x02\x02" +
		"\u013F\u0140\x07A\x02\x02\u0140\u0141\x070\x02\x02\u0141b\x03\x02\x02" +
		"\x02\u0142\u0143\x07,\x02\x02\u0143d\x03\x02\x02\x02\u0144\u0145\x07(" +
		"\x02\x02\u0145f\x03\x02\x02\x02\u0146\u0147\x07(\x02\x02\u0147\u0148\x07" +
		"(\x02\x02\u0148h\x03\x02\x02\x02\u0149\u014A\x07~\x02\x02\u014A\u014B" +
		"\x07~\x02\x02\u014Bj\x03\x02\x02\x02\u014C\u014D\x07a\x02\x02\u014Dl\x03" +
		"\x02\x02\x02\u014E\u014F\x07#\x02\x02\u014Fn\x03\x02\x02\x02\u0150\u0151" +
		"\x07^\x02\x02\u0151p\x03\x02\x02\x02\u0152\u0153\x07&\x02\x02\u0153r\x03" +
		"\x02\x02\x02\u0154\u0155\x05q9\x02\u0155\u0156\x05\x83B\x02\u0156t\x03" +
		"\x02\x02\x02\u0157\u0159\t\x02\x02\x02\u0158\u015A\t\x02\x02\x02\u0159" +
		"\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\u015C\t\x03\x02\x02\u015C\u015D\x05\x8DG\x02\u015D\u015E" +
		"\x070\x02\x02\u015E\u015F\x05\x8DG\x02\u015F\u0165\x03\x02\x02\x02\u0160" +
		"\u0161\x05\x8BF\x02\u0161\u0162\x070\x02\x02\u0162\u0163\x05\x8BF\x02" +
		"\u0163\u0165\x03\x02\x02\x02\u0164\u0157\x03\x02\x02\x02\u0164\u0160\x03" +
		"\x02\x02\x02\u0165v\x03\x02\x02\x02\u0166\u0168\t\x02\x02\x02\u0167\u0169" +
		"\t\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
		"\u0169\u016A\x03\x02\x02\x02\u016A\u016B\t\x03\x02\x02\u016B\u016E\x05" +
		"\x8DG\x02\u016C\u016E\x05\x8BF\x02\u016D\u0166\x03\x02\x02\x02\u016D\u016C" +
		"\x03\x02\x02\x02\u016Ex\x03\x02\x02\x02\u016F\u0170\x07$\x02\x02\u0170" +
		"\u0171\n\x04\x02\x02\u0171\u0172\x07$\x02\x02\u0172z\x03\x02\x02\x02\u0173" +
		"\u0179\x07)\x02\x02\u0174\u0178\n\x05\x02\x02\u0175\u0176\x07^\x02\x02" +
		"\u0176\u0178\t\x06\x02\x02\u0177\u0174\x03\x02\x02\x02\u0177\u0175\x03" +
		"\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179" +
		"\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0179\x03\x02" +
		"\x02\x02\u017C\u017D\x07)\x02\x02\u017D|\x03\x02\x02\x02\u017E\u0184\x07" +
		"b\x02\x02\u017F\u0183\n\x07\x02\x02\u0180\u0181\x07^\x02\x02\u0181\u0183" +
		"\t\b\x02\x02\u0182\u017F\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183" +
		"\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02" +
		"\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187" +
		"\u0188\x07b\x02\x02\u0188~\x03\x02\x02\x02\u0189\u018A\x07%\x02\x02\u018A" +
		"\u018B\x07}\x02\x02\u018B\u018F\x03\x02\x02\x02\u018C\u018E\v\x02\x02" +
		"\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u0190" +
		"\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02" +
		"\u0191\u018F\x03\x02\x02\x02\u0192\u0193\x07\x7F\x02\x02\u0193\x80\x03" +
		"\x02\x02\x02\u0194\u0198\t\t\x02\x02\u0195\u0197\t\n\x02\x02\u0196\u0195" +
		"\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02" +
		"\u0198\u0199\x03\x02\x02\x02\u0199\x82\x03\x02\x02\x02\u019A\u0198\x03" +
		"\x02\x02\x02\u019B\u019F\t\v\x02\x02\u019C\u019E\t\n\x02\x02\u019D\u019C" +
		"\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02" +
		"\u019F\u01A0\x03\x02\x02\x02\u01A0\x84\x03\x02\x02\x02\u01A1\u019F\x03" +
		"\x02\x02\x02\u01A2\u01A3\x06C\x02\x02\u01A3\u01AF\x05\x87D\x02\u01A4\u01A6" +
		"\x07\x0F\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01AA\x07\f\x02\x02\u01A8\u01AA\x07" +
		"\x0F\x02\x02\u01A9\u01A5\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA" +
		"\u01AC\x03\x02\x02\x02\u01AB\u01AD\x05\x87D\x02\u01AC\u01AB\x03\x02\x02" +
		"\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE\u01A2" +
		"\x03\x02\x02\x02\u01AE\u01A9\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02" +
		"\u01B0\u01B1\bC\b\x02\u01B1\x86\x03\x02\x02\x02\u01B2\u01B4\t\f\x02\x02" +
		"\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B3\x03" +
		"\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B8\bD\t\x02\u01B8\x88\x03\x02\x02\x02\u01B9\u01BA\x07/\x02\x02\u01BA" +
		"\u01BB\x07/\x02\x02\u01BB\u01BF\x03\x02\x02\x02\u01BC\u01BE\n\r\x02\x02" +
		"\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03" +
		"\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1" +
		"\u01BF\x03\x02\x02\x02\u01C2\u01C3\bE\t\x02\u01C3\x8A\x03\x02\x02\x02" +
		"\u01C4\u01C6\t\x02\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03" +
		"\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01D1\x03\x02\x02\x02\u01C9\u01CB\x07a\x02\x02\u01CA\u01CC\t\x02\x02" +
		"\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CB" +
		"\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02" +
		"\u01CF\u01C9\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03" +
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\x8C\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D4\u01D6\t\x0E\x02\x02\u01D5\u01D4\x03\x02\x02" +
		"\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8" +
		"\x03\x02\x02\x02\u01D8\u01E1\x03\x02\x02\x02\u01D9\u01DB\x07a\x02\x02" +
		"\u01DA\u01DC\t\x0E\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03" +
		"\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE" +
		"\u01E0\x03\x02\x02\x02\u01DF\u01D9\x03\x02\x02\x02\u01E0\u01E3\x03\x02" +
		"\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
		"\x8E\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\x1A\x02\u0159\u0164\u0168" +
		"\u016D\u0177\u0179\u0182\u0184\u018F\u0198\u019F\u01A5\u01A9\u01AC\u01AE" +
		"\u01B5\u01BF\u01C7\u01CD\u01D1\u01D7\u01DD\u01E1\n\x03\x02\x02\x03\x03" +
		"\x03\x03\x04\x04\x03\x05\x05\x03\x06\x06\x03\x07\x07\x03C\b\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

