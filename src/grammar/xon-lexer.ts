// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
// @ts-nocheck
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
	public static readonly Infix = 3;
	public static readonly Is = 4;
	public static readonly As = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly ElseIf = 8;
	public static readonly Loop = 9;
	public static readonly In = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly Preprocessor = 13;
	public static readonly LineBreak = 14;
	public static readonly OpenBracket = 15;
	public static readonly CloseBracket = 16;
	public static readonly OpenParen = 17;
	public static readonly CloseParen = 18;
	public static readonly OpenBrace = 19;
	public static readonly CloseBrace = 20;
	public static readonly Comma = 21;
	public static readonly Assign = 22;
	public static readonly Question = 23;
	public static readonly Colon = 24;
	public static readonly Dot = 25;
	public static readonly Plus = 26;
	public static readonly Minus = 27;
	public static readonly Exclamation = 28;
	public static readonly Asterisk = 29;
	public static readonly Slash = 30;
	public static readonly Modulo = 31;
	public static readonly Caret = 32;
	public static readonly Hash = 33;
	public static readonly LessThan = 34;
	public static readonly MoreThan = 35;
	public static readonly LessThanEquals = 36;
	public static readonly MoreThanEquals = 37;
	public static readonly Equals = 38;
	public static readonly NotEquals = 39;
	public static readonly And = 40;
	public static readonly Or = 41;
	public static readonly AsteriskAssign = 42;
	public static readonly SlashAssign = 43;
	public static readonly PercentAssign = 44;
	public static readonly PlusAssign = 45;
	public static readonly MinusAssign = 46;
	public static readonly Pipe = 47;
	public static readonly LambdaStart = 48;
	public static readonly Range = 49;
	public static readonly Elipsis = 50;
	public static readonly BooleanLiteral = 51;
	public static readonly FloatLiteral = 52;
	public static readonly IntegerLiteral = 53;
	public static readonly CharLiteral = 54;
	public static readonly StringLiteral = 55;
	public static readonly StringFormatStart = 56;
	public static readonly StringFormatMiddle = 57;
	public static readonly StringFormatEnd = 58;
	public static readonly ID = 59;
	public static readonly Skip = 60;
	public static readonly UnexpectedCharacter = 61;
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
		"Infix", "Is", "As", "If", "Else", "ElseIf", "Loop", "In", "Break", "Return", 
		"Preprocessor", "LineBreak", "OpenBracket", "CloseBracket", "OpenParen", 
		"CloseParen", "OpenBrace", "CloseBrace", "Comma", "Assign", "Question", 
		"Colon", "Dot", "Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", 
		"Caret", "Hash", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", 
		"Equals", "NotEquals", "And", "Or", "AsteriskAssign", "SlashAssign", "PercentAssign", 
		"PlusAssign", "MinusAssign", "Pipe", "LambdaStart", "Range", "Elipsis", 
		"BooleanLiteral", "FloatLiteral", "IntegerLiteral", "CharLiteral", "StringLiteral", 
		"StringFormatStart", "StringFormatMiddle", "StringFormatEnd", "ID", "Skip", 
		"UnexpectedCharacter", "SPACES", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", 
		"LINE_JOINING", "NUMBER", "STRING_CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'infix'", "'is'", "'as'", "'if'", "'else'", 
		"'elif'", "'loop'", "'in'", "'break'", "'return'", undefined, undefined, 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", "'?'", "':'", 
		"'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", 
		"'%='", "'+='", "'-='", "'|'", "'\\'", "'..'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Infix", "Is", "As", "If", "Else", "ElseIf", 
		"Loop", "In", "Break", "Return", "Preprocessor", "LineBreak", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"Comma", "Assign", "Question", "Colon", "Dot", "Plus", "Minus", "Exclamation", 
		"Asterisk", "Slash", "Modulo", "Caret", "Hash", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"AsteriskAssign", "SlashAssign", "PercentAssign", "PlusAssign", "MinusAssign", 
		"Pipe", "LambdaStart", "Range", "Elipsis", "BooleanLiteral", "FloatLiteral", 
		"IntegerLiteral", "CharLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
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
		case 11:
			this.LineBreak_action(_localctx, actionIndex);
			break;

		case 12:
			this.OpenBracket_action(_localctx, actionIndex);
			break;

		case 13:
			this.CloseBracket_action(_localctx, actionIndex);
			break;

		case 14:
			this.OpenParen_action(_localctx, actionIndex);
			break;

		case 15:
			this.CloseParen_action(_localctx, actionIndex);
			break;

		case 16:
			this.OpenBrace_action(_localctx, actionIndex);
			break;

		case 17:
			this.CloseBrace_action(_localctx, actionIndex);
			break;
		}
	}
	private LineBreak_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.handleLineBreak()
			break;
		}
	}
	private OpenBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened++;
			break;
		}
	}
	private CloseBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened--;
			break;
		}
	}
	private OpenParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened++;
			break;
		}
	}
	private CloseParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened--;
			break;
		}
	}
	private OpenBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened++;
			break;
		}
	}
	private CloseBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.opened--;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.LineBreak_sempred(_localctx, predIndex);
		}
		return true;
	}
	private LineBreak_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02?\u01C9\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\xB8\n\f\f\f\x0E\f\xBB\v\f" +
		"\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\xC2\n\r\x03\r\x03\r\x05\r\xC6\n\r" +
		"\x03\r\x05\r\xC9\n\r\x05\r\xCB\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03(" +
		"\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x030\x031\x031\x031\x03" +
		"1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x052\u0134\n2\x033\x05" +
		"3\u0137\n3\x033\x033\x033\x034\x034\x035\x035\x035\x035\x036\x036\x07" +
		"6\u0144\n6\f6\x0E6\u0147\v6\x036\x036\x037\x037\x077\u014D\n7\f7\x0E7" +
		"\u0150\v7\x037\x037\x038\x038\x078\u0156\n8\f8\x0E8\u0159\v8\x038\x03" +
		"8\x039\x039\x079\u015F\n9\f9\x0E9\u0162\v9\x039\x039\x03:\x03:\x07:\u0168" +
		"\n:\f:\x0E:\u016B\v:\x03;\x03;\x03;\x03;\x05;\u0171\n;\x03;\x03;\x03<" +
		"\x03<\x03<\x03<\x03=\x06=\u017A\n=\r=\x0E=\u017B\x03>\x03>\x03>\x03>\x07" +
		">\u0182\n>\f>\x0E>\u0185\v>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x07?\u018E" +
		"\n?\f?\x0E?\u0191\v?\x03@\x03@\x05@\u0195\n@\x03@\x05@\u0198\n@\x03@\x03" +
		"@\x05@\u019C\n@\x03A\x03A\x05A\u01A0\nA\x03A\x03A\x06A\u01A4\nA\rA\x0E" +
		"A\u01A5\x03A\x03A\x06A\u01AA\nA\rA\x0EA\u01AB\x07A\u01AE\nA\fA\x0EA\u01B1" +
		"\vA\x03A\x06A\u01B4\nA\rA\x0EA\u01B5\x03A\x03A\x06A\u01BA\nA\rA\x0EA\u01BB" +
		"\x07A\u01BE\nA\fA\x0EA\u01C1\vA\x05A\u01C3\nA\x03B\x03B\x03B\x05B\u01C8" +
		"\nB\x04\xB9\u0183\x02\x02C\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b" +
		"\v\x02\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F" +
		"\x19\x02\x10\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02" +
		"\x16\'\x02\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5" +
		"\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02" +
		"(K\x02)M\x02*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x02" +
		"4c\x025e\x026g\x027i\x028k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02" +
		"\x02{\x02\x02}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02\x02\x03\x02\v\x03" +
		"\x02))\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02\v\v\"\"\x04\x02\f\f\x0F" +
		"\x0F\x03\x022;\x05\x022;C\\c|\x04\x02$$}}\v\x02$$^^ddhhppttvvxx}}\x02" +
		"\u01E0\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
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
		"\x02\x03\x85\x03\x02\x02\x02\x05\x8B\x03\x02\x02\x02\x07\x8E\x03\x02\x02" +
		"\x02\t\x91\x03\x02\x02\x02\v\x94\x03\x02\x02\x02\r\x99\x03\x02\x02\x02" +
		"\x0F\x9E\x03\x02\x02\x02\x11\xA3\x03\x02\x02\x02\x13\xA6\x03\x02\x02\x02" +
		"\x15\xAC\x03\x02\x02\x02\x17\xB3\x03\x02\x02\x02\x19\xCA\x03\x02\x02\x02" +
		"\x1B\xCE\x03\x02\x02\x02\x1D\xD1\x03\x02\x02\x02\x1F\xD4\x03\x02\x02\x02" +
		"!\xD7\x03\x02\x02\x02#\xDA\x03\x02\x02\x02%\xDD\x03\x02\x02\x02\'\xE0" +
		"\x03\x02\x02\x02)\xE2\x03\x02\x02\x02+\xE4\x03\x02\x02\x02-\xE6\x03\x02" +
		"\x02\x02/\xE8\x03\x02\x02\x021\xEA\x03\x02\x02\x023\xEC\x03\x02\x02\x02" +
		"5\xEE\x03\x02\x02\x027\xF0\x03\x02\x02\x029\xF2\x03\x02\x02\x02;\xF4\x03" +
		"\x02\x02\x02=\xF6\x03\x02\x02\x02?\xF8\x03\x02\x02\x02A\xFA\x03\x02\x02" +
		"\x02C\xFC\x03\x02\x02\x02E\xFE\x03\x02\x02\x02G\u0101\x03\x02\x02\x02" +
		"I\u0104\x03\x02\x02\x02K\u0107\x03\x02\x02\x02M\u010A\x03\x02\x02\x02" +
		"O\u010D\x03\x02\x02\x02Q\u0110\x03\x02\x02\x02S\u0113\x03\x02\x02\x02" +
		"U\u0116\x03\x02\x02\x02W\u0119\x03\x02\x02\x02Y\u011C\x03\x02\x02\x02" +
		"[\u011F\x03\x02\x02\x02]\u0121\x03\x02\x02\x02_\u0123\x03\x02\x02\x02" +
		"a\u0126\x03\x02\x02\x02c\u0133\x03\x02\x02\x02e\u0136\x03\x02\x02\x02" +
		"g\u013B\x03\x02\x02\x02i\u013D\x03\x02\x02\x02k\u0141\x03\x02\x02\x02" +
		"m\u014A\x03\x02\x02\x02o\u0153\x03\x02\x02\x02q\u015C\x03\x02\x02\x02" +
		"s\u0165\x03\x02\x02\x02u\u0170\x03\x02\x02\x02w\u0174\x03\x02\x02\x02" +
		"y\u0179\x03\x02\x02\x02{\u017D\x03\x02\x02\x02}\u0189\x03\x02\x02\x02" +
		"\x7F\u0192\x03\x02\x02\x02\x81\u01C2\x03\x02\x02\x02\x83\u01C7\x03\x02" +
		"\x02\x02\x85\x86\x07k\x02\x02\x86\x87\x07p\x02\x02\x87\x88\x07h\x02\x02" +
		"\x88\x89\x07k\x02\x02\x89\x8A\x07z\x02\x02\x8A\x04\x03\x02\x02\x02\x8B" +
		"\x8C\x07k\x02\x02\x8C\x8D\x07u\x02\x02\x8D\x06\x03\x02\x02\x02\x8E\x8F" +
		"\x07c\x02\x02\x8F\x90\x07u\x02\x02\x90\b\x03\x02\x02\x02\x91\x92\x07k" +
		"\x02\x02\x92\x93\x07h\x02\x02\x93\n\x03\x02\x02\x02\x94\x95\x07g\x02\x02" +
		"\x95\x96\x07n\x02\x02\x96\x97\x07u\x02\x02\x97\x98\x07g\x02\x02\x98\f" +
		"\x03\x02\x02\x02\x99\x9A\x07g\x02\x02\x9A\x9B\x07n\x02\x02\x9B\x9C\x07" +
		"k\x02\x02\x9C\x9D\x07h\x02\x02\x9D\x0E\x03\x02\x02\x02\x9E\x9F\x07n\x02" +
		"\x02\x9F\xA0\x07q\x02\x02\xA0\xA1\x07q\x02\x02\xA1\xA2\x07r\x02\x02\xA2" +
		"\x10\x03\x02\x02\x02\xA3\xA4\x07k\x02\x02\xA4\xA5\x07p\x02\x02\xA5\x12" +
		"\x03\x02\x02\x02\xA6\xA7\x07d\x02\x02\xA7\xA8\x07t\x02\x02\xA8\xA9\x07" +
		"g\x02\x02\xA9\xAA\x07c\x02\x02\xAA\xAB\x07m\x02\x02\xAB\x14\x03\x02\x02" +
		"\x02\xAC\xAD\x07t\x02\x02\xAD\xAE\x07g\x02\x02\xAE\xAF\x07v\x02\x02\xAF" +
		"\xB0\x07w\x02\x02\xB0\xB1\x07t\x02\x02\xB1\xB2\x07p\x02\x02\xB2\x16\x03" +
		"\x02\x02\x02\xB3\xB4\x07%\x02\x02\xB4\xB5\x07}\x02\x02\xB5\xB9\x03\x02" +
		"\x02\x02\xB6\xB8\v\x02\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02" +
		"\x02\x02\xB9\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x03\x02" +
		"\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD\x07\x7F\x02\x02\xBD\x18\x03\x02" +
		"\x02\x02\xBE\xBF\x06\r\x02\x02\xBF\xCB\x05y=\x02\xC0\xC2\x07\x0F\x02\x02" +
		"\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
		"\xC3\xC6\x07\f\x02\x02\xC4\xC6\x07\x0F\x02\x02\xC5\xC1\x03\x02\x02\x02" +
		"\xC5\xC4\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC9\x05y=\x02\xC8" +
		"\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA" +
		"\xBE\x03\x02\x02\x02\xCA\xC5\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC" +
		"\xCD\b\r\x02\x02\xCD\x1A\x03\x02\x02\x02\xCE\xCF\x07]\x02\x02\xCF\xD0" +
		"\b\x0E\x03\x02\xD0\x1C\x03\x02\x02\x02\xD1\xD2\x07_\x02\x02\xD2\xD3\b" +
		"\x0F\x04\x02\xD3\x1E\x03\x02\x02\x02\xD4\xD5\x07*\x02\x02\xD5\xD6\b\x10" +
		"\x05\x02\xD6 \x03\x02\x02\x02\xD7\xD8\x07+\x02\x02\xD8\xD9\b\x11\x06\x02" +
		"\xD9\"\x03\x02\x02\x02\xDA\xDB\x07}\x02\x02\xDB\xDC\b\x12\x07\x02\xDC" +
		"$\x03\x02\x02\x02\xDD\xDE\x07\x7F\x02\x02\xDE\xDF\b\x13\b\x02\xDF&\x03" +
		"\x02\x02\x02\xE0\xE1\x07.\x02\x02\xE1(\x03\x02\x02\x02\xE2\xE3\x07?\x02" +
		"\x02\xE3*\x03\x02\x02\x02\xE4\xE5\x07A\x02\x02\xE5,\x03\x02\x02\x02\xE6" +
		"\xE7\x07<\x02\x02\xE7.\x03\x02\x02\x02\xE8\xE9\x070\x02\x02\xE90\x03\x02" +
		"\x02\x02\xEA\xEB\x07-\x02\x02\xEB2\x03\x02\x02\x02\xEC\xED\x07/\x02\x02" +
		"\xED4\x03\x02\x02\x02\xEE\xEF\x07#\x02\x02\xEF6\x03\x02\x02\x02\xF0\xF1" +
		"\x07,\x02\x02\xF18\x03\x02\x02\x02\xF2\xF3\x071\x02\x02\xF3:\x03\x02\x02" +
		"\x02\xF4\xF5\x07\'\x02\x02\xF5<\x03\x02\x02\x02\xF6\xF7\x07`\x02\x02\xF7" +
		">\x03\x02\x02\x02\xF8\xF9\x07%\x02\x02\xF9@\x03\x02\x02\x02\xFA\xFB\x07" +
		">\x02\x02\xFBB\x03\x02\x02\x02\xFC\xFD\x07@\x02\x02\xFDD\x03\x02\x02\x02" +
		"\xFE\xFF\x07>\x02\x02\xFF\u0100\x07?\x02\x02\u0100F\x03\x02\x02\x02\u0101" +
		"\u0102\x07@\x02\x02\u0102\u0103\x07?\x02\x02\u0103H\x03\x02\x02\x02\u0104" +
		"\u0105\x07?\x02\x02\u0105\u0106\x07?\x02\x02\u0106J\x03\x02\x02\x02\u0107" +
		"\u0108\x07#\x02\x02\u0108\u0109\x07?\x02\x02\u0109L\x03\x02\x02\x02\u010A" +
		"\u010B\x07(\x02\x02\u010B\u010C\x07(\x02\x02\u010CN\x03\x02\x02\x02\u010D" +
		"\u010E\x07~\x02\x02\u010E\u010F\x07~\x02\x02\u010FP\x03\x02\x02\x02\u0110" +
		"\u0111\x07,\x02\x02\u0111\u0112\x07?\x02\x02\u0112R\x03\x02\x02\x02\u0113" +
		"\u0114\x071\x02\x02\u0114\u0115\x07?\x02\x02\u0115T\x03\x02\x02\x02\u0116" +
		"\u0117\x07\'\x02\x02\u0117\u0118\x07?\x02\x02\u0118V\x03\x02\x02\x02\u0119" +
		"\u011A\x07-\x02\x02\u011A\u011B\x07?\x02\x02\u011BX\x03\x02\x02\x02\u011C" +
		"\u011D\x07/\x02\x02\u011D\u011E\x07?\x02\x02\u011EZ\x03\x02\x02\x02\u011F" +
		"\u0120\x07~\x02\x02\u0120\\\x03\x02\x02\x02\u0121\u0122\x07^\x02\x02\u0122" +
		"^\x03\x02\x02\x02\u0123\u0124\x070\x02\x02\u0124\u0125\x070\x02\x02\u0125" +
		"`\x03\x02\x02\x02\u0126\u0127\x070\x02\x02\u0127\u0128\x070\x02\x02\u0128" +
		"\u0129\x070\x02\x02\u0129b\x03\x02\x02\x02\u012A\u012B\x07v\x02\x02\u012B" +
		"\u012C\x07t\x02\x02\u012C\u012D\x07w\x02\x02\u012D\u0134\x07g\x02\x02" +
		"\u012E\u012F\x07h\x02\x02\u012F\u0130\x07c\x02\x02\u0130\u0131\x07n\x02" +
		"\x02\u0131\u0132\x07u\x02\x02\u0132\u0134\x07g\x02\x02\u0133\u012A\x03" +
		"\x02\x02\x02\u0133\u012E\x03\x02\x02\x02\u0134d\x03\x02\x02\x02\u0135" +
		"\u0137\x05\x81A\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02" +
		"\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x070\x02\x02\u0139\u013A" +
		"\x05\x81A\x02\u013Af\x03\x02\x02\x02\u013B\u013C\x05\x81A\x02\u013Ch\x03" +
		"\x02\x02\x02\u013D\u013E\x07)\x02\x02\u013E\u013F\n\x02\x02\x02\u013F" +
		"\u0140\x07)\x02\x02\u0140j\x03\x02\x02\x02\u0141\u0145\x07$\x02\x02\u0142" +
		"\u0144\x05\x83B\x02\u0143\u0142\x03\x02\x02\x02\u0144\u0147\x03\x02\x02" +
		"\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0148" +
		"\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148\u0149\x07$\x02\x02" +
		"\u0149l\x03\x02\x02\x02\u014A\u014E\x07$\x02\x02\u014B\u014D\x05\x83B" +
		"\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C" +
		"\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0151\x03\x02\x02\x02" +
		"\u0150\u014E\x03\x02\x02\x02\u0151\u0152\x07}\x02\x02\u0152n\x03\x02\x02" +
		"\x02\u0153\u0157\x07\x7F\x02\x02\u0154\u0156\x05\x83B\x02\u0155\u0154" +
		"\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02" +
		"\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159\u0157\x03" +
		"\x02\x02\x02\u015A\u015B\x07}\x02\x02\u015Bp\x03\x02\x02\x02\u015C\u0160" +
		"\x07\x7F\x02\x02\u015D\u015F\x05\x83B\x02\u015E\u015D\x03\x02\x02\x02" +
		"\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u0161\x03" +
		"\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0163" +
		"\u0164\x07$\x02\x02\u0164r\x03\x02\x02\x02\u0165\u0169\t\x03\x02\x02\u0166" +
		"\u0168\t\x04\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\u016B\x03\x02\x02" +
		"\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016At\x03" +
		"\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u0171\x05y=\x02\u016D\u0171" +
		"\x05}?\x02\u016E\u0171\x05{>\x02\u016F\u0171\x05\x7F@\x02\u0170\u016C" +
		"\x03\x02\x02\x02\u0170\u016D\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02" +
		"\u0170\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\b" +
		";\t\x02\u0173v\x03\x02\x02\x02\u0174\u0175\v\x02\x02\x02\u0175\u0176\x03" +
		"\x02\x02\x02\u0176\u0177\b<\n\x02\u0177x\x03\x02\x02\x02\u0178\u017A\t" +
		"\x05\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B" +
		"\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017Cz\x03\x02\x02" +
		"\x02\u017D\u017E\x071\x02\x02\u017E\u017F\x07,\x02\x02\u017F\u0183\x03" +
		"\x02\x02\x02\u0180\u0182\v\x02\x02\x02\u0181\u0180\x03\x02\x02\x02\u0182" +
		"\u0185\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0183\u0181\x03\x02" +
		"\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0186" +
		"\u0187\x07,\x02\x02\u0187\u0188\x071\x02\x02\u0188|\x03\x02\x02\x02\u0189" +
		"\u018A\x071\x02\x02\u018A\u018B\x071\x02\x02\u018B\u018F\x03\x02\x02\x02" +
		"\u018C\u018E\n\x06\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03" +
		"\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190" +
		"~\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0194\x07^\x02\x02" +
		"\u0193\u0195\x05y=\x02\u0194\u0193\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u019B\x03\x02\x02\x02\u0196\u0198\x07\x0F\x02\x02\u0197" +
		"\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02" +
		"\x02\x02\u0199\u019C\x07\f\x02\x02\u019A\u019C\x07\x0F\x02\x02\u019B\u0197" +
		"\x03\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\x80\x03\x02\x02\x02" +
		"\u019D\u019F\t\x07\x02\x02\u019E\u01A0\t\x07\x02\x02\u019F\u019E\x03\x02" +
		"\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1" +
		"\u01A3\x07z\x02\x02\u01A2\u01A4\t\b\x02\x02\u01A3\u01A2\x03\x02\x02\x02" +
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03" +
		"\x02\x02\x02\u01A6\u01AF\x03\x02\x02\x02\u01A7\u01A9\x07a\x02\x02\u01A8" +
		"\u01AA\t\b\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02" +
		"\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE" +
		"\x03\x02\x02\x02\u01AD\u01A7\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02" +
		"\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01C3\x03" +
		"\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B4\t\x07\x02\x02\u01B3" +
		"\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
		"\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01BF\x03\x02\x02\x02\u01B7" +
		"\u01B9\x07a\x02\x02\u01B8\u01BA\t\x07\x02\x02\u01B9\u01B8\x03\x02\x02" +
		"\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC" +
		"\x03\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01B7\x03\x02\x02\x02" +
		"\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03" +
		"\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2" +
		"\u019D\x03\x02\x02\x02\u01C2\u01B3\x03\x02\x02\x02\u01C3\x82\x03\x02\x02" +
		"\x02\u01C4\u01C8\n\t\x02\x02\u01C5\u01C6\x07^\x02\x02\u01C6\u01C8\t\n" +
		"\x02\x02\u01C7\u01C4\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8" +
		"\x84\x03\x02\x02\x02\x1F\x02\xB9\xC1\xC5\xC8\xCA\u0133\u0136\u0145\u014E" +
		"\u0157\u0160\u0169\u0170\u017B\u0183\u018F\u0194\u0197\u019B\u019F\u01A5" +
		"\u01AB\u01AF\u01B5\u01BB\u01BF\u01C2\u01C7\v\x03\r\x02\x03\x0E\x03\x03" +
		"\x0F\x04\x03\x10\x05\x03\x11\x06\x03\x12\x07\x03\x13\b\b\x02\x02\x02\x04" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

