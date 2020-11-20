// Generated from XonLexer.g4 by ANTLR 4.7.3-SNAPSHOT

 
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
	public static readonly As = 3;
	public static readonly If = 4;
	public static readonly Else = 5;
	public static readonly ElseIf = 6;
	public static readonly Loop = 7;
	public static readonly In = 8;
	public static readonly Pass = 9;
	public static readonly Continue = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly Select = 13;
	public static readonly Preprocessor = 14;
	public static readonly LineBreak = 15;
	public static readonly BitAnd = 16;
	public static readonly BitOr = 17;
	public static readonly BitXor = 18;
	public static readonly BitNot = 19;
	public static readonly RightShiftArithmetic = 20;
	public static readonly LeftShiftArithmetic = 21;
	public static readonly OpenBracket = 22;
	public static readonly CloseBracket = 23;
	public static readonly OpenParen = 24;
	public static readonly CloseParen = 25;
	public static readonly OpenBrace = 26;
	public static readonly CloseBrace = 27;
	public static readonly Tilde = 28;
	public static readonly Ad = 29;
	public static readonly Comma = 30;
	public static readonly Assign = 31;
	public static readonly Question = 32;
	public static readonly Colon = 33;
	public static readonly Dot = 34;
	public static readonly Plus = 35;
	public static readonly Minus = 36;
	public static readonly Exclamation = 37;
	public static readonly Asterisk = 38;
	public static readonly Slash = 39;
	public static readonly Modulo = 40;
	public static readonly Caret = 41;
	public static readonly Hash = 42;
	public static readonly LessThan = 43;
	public static readonly MoreThan = 44;
	public static readonly LessThanEquals = 45;
	public static readonly MoreThanEquals = 46;
	public static readonly Equals = 47;
	public static readonly NotEquals = 48;
	public static readonly And = 49;
	public static readonly Or = 50;
	public static readonly AsteriskAssign = 51;
	public static readonly SlashAssign = 52;
	public static readonly PercentAssign = 53;
	public static readonly PlusAssign = 54;
	public static readonly MinusAssign = 55;
	public static readonly LeftShiftArithmeticAssign = 56;
	public static readonly RightShiftArithmeticAssign = 57;
	public static readonly BitAndAssign = 58;
	public static readonly BitXorAssign = 59;
	public static readonly BitOrAssign = 60;
	public static readonly Pipe = 61;
	public static readonly Underscore = 62;
	public static readonly Elipsis = 63;
	public static readonly LambdaStart = 64;
	public static readonly NullLiteral = 65;
	public static readonly BooleanLiteral = 66;
	public static readonly NumberLiteral = 67;
	public static readonly StringLiteral = 68;
	public static readonly StringFormatStart = 69;
	public static readonly StringFormatMiddle = 70;
	public static readonly StringFormatEnd = 71;
	public static readonly ID = 72;
	public static readonly Skip = 73;
	public static readonly UnexpectedCharacter = 74;
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
		"As", "If", "Else", "ElseIf", "Loop", "In", "Pass", "Continue", "Break", 
		"Return", "Select", "Preprocessor", "LineBreak", "BitAnd", "BitOr", "BitXor", 
		"BitNot", "RightShiftArithmetic", "LeftShiftArithmetic", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"Tilde", "Ad", "Comma", "Assign", "Question", "Colon", "Dot", "Plus", 
		"Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", "Hash", 
		"LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", 
		"NotEquals", "And", "Or", "AsteriskAssign", "SlashAssign", "PercentAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "Pipe", "Underscore", "Elipsis", 
		"LambdaStart", "NullLiteral", "BooleanLiteral", "NumberLiteral", "StringLiteral", 
		"StringFormatStart", "StringFormatMiddle", "StringFormatEnd", "ID", "Skip", 
		"UnexpectedCharacter", "SPACES", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", 
		"LINE_JOINING", "NUMBER", "CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'elif'", "'loop'", 
		"'in'", "'pass'", "'continue'", "'break'", "'return'", "'select'", undefined, 
		undefined, "'and'", "'or'", "'xor'", "'not'", "'>>'", "'<<'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'~'", "'@'", "','", "'='", "'?'", "':'", 
		"'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", 
		"'%='", "'+='", "'-='", "'<<='", "'>>='", undefined, undefined, undefined, 
		"'|'", "'_'", "'...'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "ElseIf", "Loop", "In", 
		"Pass", "Continue", "Break", "Return", "Select", "Preprocessor", "LineBreak", 
		"BitAnd", "BitOr", "BitXor", "BitNot", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "Tilde", "Ad", "Comma", "Assign", "Question", "Colon", "Dot", 
		"Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", 
		"Hash", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", 
		"NotEquals", "And", "Or", "AsteriskAssign", "SlashAssign", "PercentAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "Pipe", "Underscore", "Elipsis", 
		"LambdaStart", "NullLiteral", "BooleanLiteral", "NumberLiteral", "StringLiteral", 
		"StringFormatStart", "StringFormatMiddle", "StringFormatEnd", "ID", "Skip", 
		"UnexpectedCharacter",
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
		case 12:
			this.LineBreak_action(_localctx, actionIndex);
			break;

		case 19:
			this.OpenBracket_action(_localctx, actionIndex);
			break;

		case 20:
			this.CloseBracket_action(_localctx, actionIndex);
			break;

		case 21:
			this.OpenParen_action(_localctx, actionIndex);
			break;

		case 22:
			this.CloseParen_action(_localctx, actionIndex);
			break;

		case 23:
			this.OpenBrace_action(_localctx, actionIndex);
			break;

		case 24:
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
		case 12:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02L\u0223\b\x01" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07" +
		"\r\xDE\n\r\f\r\x0E\r\xE1\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xE8\n\x0E\x03\x0E\x03\x0E\x05\x0E\xEC\n\x0E\x03\x0E\x05\x0E\xEF\n\x0E" +
		"\x05\x0E\xF1\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		" \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03-\x03" +
		"-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x03" +
		"2\x032\x032\x033\x033\x033\x034\x034\x034\x035\x035\x035\x036\x036\x03" +
		"6\x037\x037\x037\x037\x038\x038\x038\x038\x039\x039\x039\x039\x039\x03" +
		"9\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03" +
		"=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0190\nA\x03B\x03B\x05B\u0194" +
		"\nB\x03B\x03B\x05B\u0198\nB\x03C\x03C\x07C\u019C\nC\fC\x0EC\u019F\vC\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x07D\u01A7\nD\fD\x0ED\u01AA\vD\x03D\x03D\x03" +
		"E\x03E\x07E\u01B0\nE\fE\x0EE\u01B3\vE\x03E\x03E\x03F\x03F\x07F\u01B9\n" +
		"F\fF\x0EF\u01BC\vF\x03F\x03F\x03G\x03G\x07G\u01C2\nG\fG\x0EG\u01C5\vG" +
		"\x03H\x03H\x03H\x03H\x05H\u01CB\nH\x03H\x03H\x03I\x03I\x03I\x03I\x03J" +
		"\x06J\u01D4\nJ\rJ\x0EJ\u01D5\x03K\x03K\x03K\x03K\x07K\u01DC\nK\fK\x0E" +
		"K\u01DF\vK\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x07L\u01E8\nL\fL\x0EL\u01EB" +
		"\vL\x03M\x03M\x05M\u01EF\nM\x03M\x05M\u01F2\nM\x03M\x03M\x05M\u01F6\n" +
		"M\x03N\x03N\x05N\u01FA\nN\x03N\x03N\x06N\u01FE\nN\rN\x0EN\u01FF\x03N\x03" +
		"N\x06N\u0204\nN\rN\x0EN\u0205\x07N\u0208\nN\fN\x0EN\u020B\vN\x03N\x06" +
		"N\u020E\nN\rN\x0EN\u020F\x03N\x03N\x06N\u0214\nN\rN\x0EN\u0215\x07N\u0218" +
		"\nN\fN\x0EN\u021B\vN\x05N\u021D\nN\x03O\x03O\x03O\x05O\u0222\nO\x04\xDF" +
		"\u01DD\x02\x02P\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r" +
		"\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10" +
		"\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02" +
		"\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02" +
		"\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02)M\x02" +
		"*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x024c\x025e\x02" +
		"6g\x027i\x028k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02@{\x02A}\x02" +
		"B\x7F\x02C\x81\x02D\x83\x02E\x85\x02F\x87\x02G\x89\x02H\x8B\x02I\x8D\x02" +
		"J\x8F\x02K\x91\x02L\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02\x02\x9B" +
		"\x02\x02\x9D\x02\x02\x03\x02\n\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02" +
		"\v\v\"\"\x04\x02\f\f\x0F\x0F\x03\x022;\x05\x022;C\\c|\x03\x02))\v\x02" +
		"$$))^^ddhhppttvvxx\x02\u023B\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02" +
		"\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02" +
		"\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03" +
		"\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02" +
		"\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02" +
		"}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02" +
		"\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02" +
		"\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02" +
		"\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x03\x9F\x03\x02\x02\x02\x05" +
		"\xA2\x03\x02\x02\x02\x07\xA5\x03\x02\x02\x02\t\xAA\x03\x02\x02\x02\v\xAF" +
		"\x03\x02\x02\x02\r\xB4\x03\x02\x02\x02\x0F\xB7\x03\x02\x02\x02\x11\xBC" +
		"\x03\x02\x02\x02\x13\xC5\x03\x02\x02\x02\x15\xCB\x03\x02\x02\x02\x17\xD2" +
		"\x03\x02\x02\x02\x19\xD9\x03\x02\x02\x02\x1B\xF0\x03\x02\x02\x02\x1D\xF4" +
		"\x03\x02\x02\x02\x1F\xF8\x03\x02\x02\x02!\xFB\x03\x02\x02\x02#\xFF\x03" +
		"\x02\x02\x02%\u0103\x03\x02\x02\x02\'\u0106\x03\x02\x02\x02)\u0109\x03" +
		"\x02\x02\x02+\u010C\x03\x02\x02\x02-\u010F\x03\x02\x02\x02/\u0112\x03" +
		"\x02\x02\x021\u0115\x03\x02\x02\x023\u0118\x03\x02\x02\x025\u011B\x03" +
		"\x02\x02\x027\u011D\x03\x02\x02\x029\u011F\x03\x02\x02\x02;\u0121\x03" +
		"\x02\x02\x02=\u0123\x03\x02\x02\x02?\u0125\x03\x02\x02\x02A\u0127\x03" +
		"\x02\x02\x02C\u0129\x03\x02\x02\x02E\u012B\x03\x02\x02\x02G\u012D\x03" +
		"\x02\x02\x02I\u012F\x03\x02\x02\x02K\u0131\x03\x02\x02\x02M\u0133\x03" +
		"\x02\x02\x02O\u0135\x03\x02\x02\x02Q\u0137\x03\x02\x02\x02S\u0139\x03" +
		"\x02\x02\x02U\u013B\x03\x02\x02\x02W\u013D\x03\x02\x02\x02Y\u0140\x03" +
		"\x02\x02\x02[\u0143\x03\x02\x02\x02]\u0146\x03\x02\x02\x02_\u0149\x03" +
		"\x02\x02\x02a\u014C\x03\x02\x02\x02c\u014F\x03\x02\x02\x02e\u0152\x03" +
		"\x02\x02\x02g\u0155\x03\x02\x02\x02i\u0158\x03\x02\x02\x02k\u015B\x03" +
		"\x02\x02\x02m\u015E\x03\x02\x02\x02o\u0162\x03\x02\x02\x02q\u0166\x03" +
		"\x02\x02\x02s\u016C\x03\x02\x02\x02u\u0172\x03\x02\x02\x02w\u0177\x03" +
		"\x02\x02\x02y\u0179\x03\x02\x02\x02{\u017B\x03\x02\x02\x02}\u017F\x03" +
		"\x02\x02\x02\x7F\u0181\x03\x02\x02\x02\x81\u018F\x03\x02\x02\x02\x83\u0197" +
		"\x03\x02\x02\x02\x85\u0199\x03\x02\x02\x02\x87\u01A2\x03\x02\x02\x02\x89" +
		"\u01AD\x03\x02\x02\x02\x8B\u01B6\x03\x02\x02\x02\x8D\u01BF\x03\x02\x02" +
		"\x02\x8F\u01CA\x03\x02\x02\x02\x91\u01CE\x03\x02\x02\x02\x93\u01D3\x03" +
		"\x02\x02\x02\x95\u01D7\x03\x02\x02\x02\x97\u01E3\x03\x02\x02\x02\x99\u01EC" +
		"\x03\x02\x02\x02\x9B\u021C\x03\x02\x02\x02\x9D\u0221\x03\x02\x02\x02\x9F" +
		"\xA0\x07c\x02\x02\xA0\xA1\x07u\x02\x02\xA1\x04\x03\x02\x02\x02\xA2\xA3" +
		"\x07k\x02\x02\xA3\xA4\x07h\x02\x02\xA4\x06\x03\x02\x02\x02\xA5\xA6\x07" +
		"g\x02\x02\xA6\xA7\x07n\x02\x02\xA7\xA8\x07u\x02\x02\xA8\xA9\x07g\x02\x02" +
		"\xA9\b\x03\x02\x02\x02\xAA\xAB\x07g\x02\x02\xAB\xAC\x07n\x02\x02\xAC\xAD" +
		"\x07k\x02\x02\xAD\xAE\x07h\x02\x02\xAE\n\x03\x02\x02\x02\xAF\xB0\x07n" +
		"\x02\x02\xB0\xB1\x07q\x02\x02\xB1\xB2\x07q\x02\x02\xB2\xB3\x07r\x02\x02" +
		"\xB3\f\x03\x02\x02\x02\xB4\xB5\x07k\x02\x02\xB5\xB6\x07p\x02\x02\xB6\x0E" +
		"\x03\x02\x02\x02\xB7\xB8\x07r\x02\x02\xB8\xB9\x07c\x02\x02\xB9\xBA\x07" +
		"u\x02\x02\xBA\xBB\x07u\x02\x02\xBB\x10\x03\x02\x02\x02\xBC\xBD\x07e\x02" +
		"\x02\xBD\xBE\x07q\x02\x02\xBE\xBF\x07p\x02\x02\xBF\xC0\x07v\x02\x02\xC0" +
		"\xC1\x07k\x02\x02\xC1\xC2\x07p\x02\x02\xC2\xC3\x07w\x02\x02\xC3\xC4\x07" +
		"g\x02\x02\xC4\x12\x03\x02\x02\x02\xC5\xC6\x07d\x02\x02\xC6\xC7\x07t\x02" +
		"\x02\xC7\xC8\x07g\x02\x02\xC8\xC9\x07c\x02\x02\xC9\xCA\x07m\x02\x02\xCA" +
		"\x14\x03\x02\x02\x02\xCB\xCC\x07t\x02\x02\xCC\xCD\x07g\x02\x02\xCD\xCE" +
		"\x07v\x02\x02\xCE\xCF\x07w\x02\x02\xCF\xD0\x07t\x02\x02\xD0\xD1\x07p\x02" +
		"\x02\xD1\x16\x03\x02\x02\x02\xD2\xD3\x07u\x02\x02\xD3\xD4\x07g\x02\x02" +
		"\xD4\xD5\x07n\x02\x02\xD5\xD6\x07g\x02\x02\xD6\xD7\x07e\x02\x02\xD7\xD8" +
		"\x07v\x02\x02\xD8\x18\x03\x02\x02\x02\xD9\xDA\x07%\x02\x02\xDA\xDB\x07" +
		"}\x02\x02\xDB\xDF\x03\x02\x02\x02\xDC\xDE\v\x02\x02\x02\xDD\xDC\x03\x02" +
		"\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xDF\xDD\x03\x02" +
		"\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE3\x07\x7F" +
		"\x02\x02\xE3\x1A\x03\x02\x02\x02\xE4\xE5\x06\x0E\x02\x02\xE5\xF1\x05\x93" +
		"J\x02\xE6\xE8\x07\x0F\x02\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC\x07\f\x02\x02\xEA\xEC\x07\x0F" +
		"\x02\x02\xEB\xE7\x03\x02\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC\xEE\x03\x02" +
		"\x02\x02\xED\xEF\x05\x93J\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02" +
		"\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xE4\x03\x02\x02\x02\xF0\xEB\x03\x02" +
		"\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\b\x0E\x02\x02\xF3\x1C\x03\x02" +
		"\x02\x02\xF4\xF5\x07c\x02\x02\xF5\xF6\x07p\x02\x02\xF6\xF7\x07f\x02\x02" +
		"\xF7\x1E\x03\x02\x02\x02\xF8\xF9\x07q\x02\x02\xF9\xFA\x07t\x02\x02\xFA" +
		" \x03\x02\x02\x02\xFB\xFC\x07z\x02\x02\xFC\xFD\x07q\x02\x02\xFD\xFE\x07" +
		"t\x02\x02\xFE\"\x03\x02\x02\x02\xFF\u0100\x07p\x02\x02\u0100\u0101\x07" +
		"q\x02\x02\u0101\u0102\x07v\x02\x02\u0102$\x03\x02\x02\x02\u0103\u0104" +
		"\x07@\x02\x02\u0104\u0105\x07@\x02\x02\u0105&\x03\x02\x02\x02\u0106\u0107" +
		"\x07>\x02\x02\u0107\u0108\x07>\x02\x02\u0108(\x03\x02\x02\x02\u0109\u010A" +
		"\x07]\x02\x02\u010A\u010B\b\x15\x03\x02\u010B*\x03\x02\x02\x02\u010C\u010D" +
		"\x07_\x02\x02\u010D\u010E\b\x16\x04\x02\u010E,\x03\x02\x02\x02\u010F\u0110" +
		"\x07*\x02\x02\u0110\u0111\b\x17\x05\x02\u0111.\x03\x02\x02\x02\u0112\u0113" +
		"\x07+\x02\x02\u0113\u0114\b\x18\x06\x02\u01140\x03\x02\x02\x02\u0115\u0116" +
		"\x07}\x02\x02\u0116\u0117\b\x19\x07\x02\u01172\x03\x02\x02\x02\u0118\u0119" +
		"\x07\x7F\x02\x02\u0119\u011A\b\x1A\b\x02\u011A4\x03\x02\x02\x02\u011B" +
		"\u011C\x07\x80\x02\x02\u011C6\x03\x02\x02\x02\u011D\u011E\x07B\x02\x02" +
		"\u011E8\x03\x02\x02\x02\u011F\u0120\x07.\x02\x02\u0120:\x03\x02\x02\x02" +
		"\u0121\u0122\x07?\x02\x02\u0122<\x03\x02\x02\x02\u0123\u0124\x07A\x02" +
		"\x02\u0124>\x03\x02\x02\x02\u0125\u0126\x07<\x02\x02\u0126@\x03\x02\x02" +
		"\x02\u0127\u0128\x070\x02\x02\u0128B\x03\x02\x02\x02\u0129\u012A\x07-" +
		"\x02\x02\u012AD\x03\x02\x02\x02\u012B\u012C\x07/\x02\x02\u012CF\x03\x02" +
		"\x02\x02\u012D\u012E\x07#\x02\x02\u012EH\x03\x02\x02\x02\u012F\u0130\x07" +
		",\x02\x02\u0130J\x03\x02\x02\x02\u0131\u0132\x071\x02\x02\u0132L\x03\x02" +
		"\x02\x02\u0133\u0134\x07\'\x02\x02\u0134N\x03\x02\x02\x02\u0135\u0136" +
		"\x07`\x02\x02\u0136P\x03\x02\x02\x02\u0137\u0138\x07%\x02\x02\u0138R\x03" +
		"\x02\x02\x02\u0139\u013A\x07>\x02\x02\u013AT\x03\x02\x02\x02\u013B\u013C" +
		"\x07@\x02\x02\u013CV\x03\x02\x02\x02\u013D\u013E\x07>\x02\x02\u013E\u013F" +
		"\x07?\x02\x02\u013FX\x03\x02\x02\x02\u0140\u0141\x07@\x02\x02\u0141\u0142" +
		"\x07?\x02\x02\u0142Z\x03\x02\x02\x02\u0143\u0144\x07?\x02\x02\u0144\u0145" +
		"\x07?\x02\x02\u0145\\\x03\x02\x02\x02\u0146\u0147\x07#\x02\x02\u0147\u0148" +
		"\x07?\x02\x02\u0148^\x03\x02\x02\x02\u0149\u014A\x07(\x02\x02\u014A\u014B" +
		"\x07(\x02\x02\u014B`\x03\x02\x02\x02\u014C\u014D\x07~\x02\x02\u014D\u014E" +
		"\x07~\x02\x02\u014Eb\x03\x02\x02\x02\u014F\u0150\x07,\x02\x02\u0150\u0151" +
		"\x07?\x02\x02\u0151d\x03\x02\x02\x02\u0152\u0153\x071\x02\x02\u0153\u0154" +
		"\x07?\x02\x02\u0154f\x03\x02\x02\x02\u0155\u0156\x07\'\x02\x02\u0156\u0157" +
		"\x07?\x02\x02\u0157h\x03\x02\x02\x02\u0158\u0159\x07-\x02\x02\u0159\u015A" +
		"\x07?\x02\x02\u015Aj\x03\x02\x02\x02\u015B\u015C\x07/\x02\x02\u015C\u015D" +
		"\x07?\x02\x02\u015Dl\x03\x02\x02\x02\u015E\u015F\x07>\x02\x02\u015F\u0160" +
		"\x07>\x02\x02\u0160\u0161\x07?\x02\x02\u0161n\x03\x02\x02\x02\u0162\u0163" +
		"\x07@\x02\x02\u0163\u0164\x07@\x02\x02\u0164\u0165\x07?\x02\x02\u0165" +
		"p\x03\x02\x02\x02\u0166\u0167\x07c\x02\x02\u0167\u0168\x07p\x02\x02\u0168" +
		"\u0169\x07f\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x07?\x02\x02" +
		"\u016Br\x03\x02\x02\x02\u016C\u016D\x07z\x02\x02\u016D\u016E\x07q\x02" +
		"\x02\u016E\u016F\x07t\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171" +
		"\x07?\x02\x02\u0171t\x03\x02\x02\x02\u0172\u0173\x07q\x02\x02\u0173\u0174" +
		"\x07t\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x07?\x02\x02\u0176" +
		"v\x03\x02\x02\x02\u0177\u0178\x07~\x02\x02\u0178x\x03\x02\x02\x02\u0179" +
		"\u017A\x07a\x02\x02\u017Az\x03\x02\x02\x02\u017B\u017C\x070\x02\x02\u017C" +
		"\u017D\x070\x02\x02\u017D\u017E\x070\x02\x02\u017E|\x03\x02\x02\x02\u017F" +
		"\u0180\x07^\x02\x02\u0180~\x03\x02\x02\x02\u0181\u0182\x07p\x02\x02\u0182" +
		"\u0183\x07w\x02\x02\u0183\u0184\x07n\x02\x02\u0184\u0185\x07n\x02\x02" +
		"\u0185\x80\x03\x02\x02\x02\u0186\u0187\x07v\x02\x02\u0187\u0188\x07t\x02" +
		"\x02\u0188\u0189\x07w\x02\x02\u0189\u0190\x07g\x02\x02\u018A\u018B\x07" +
		"h\x02\x02\u018B\u018C\x07c\x02\x02\u018C\u018D\x07n\x02\x02\u018D\u018E" +
		"\x07u\x02\x02\u018E\u0190\x07g\x02\x02\u018F\u0186\x03\x02\x02\x02\u018F" +
		"\u018A\x03\x02\x02\x02\u0190\x82\x03\x02\x02\x02\u0191\u0198\x05\x9BN" +
		"\x02\u0192\u0194\x05\x9BN\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194" +
		"\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x070\x02\x02" +
		"\u0196\u0198\x05\x9BN\x02\u0197\u0191\x03\x02\x02\x02\u0197\u0193\x03" +
		"\x02\x02\x02\u0198\x84\x03\x02\x02\x02\u0199\u019D\x07)\x02\x02\u019A" +
		"\u019C\x05\x9DO\x02\u019B\u019A\x03\x02\x02\x02\u019C\u019F\x03\x02\x02" +
		"\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A0" +
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1\x07)\x02\x02" +
		"\u01A1\x86\x03\x02\x02\x02\u01A2\u01A3\x07h\x02\x02\u01A3\u01A4\x07)\x02" +
		"\x02\u01A4\u01A8\x03\x02\x02\x02\u01A5\u01A7\x05\x9DO\x02\u01A6\u01A5" +
		"\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02" +
		"\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01A8\x03" +
		"\x02\x02\x02\u01AB\u01AC\x07}\x02\x02\u01AC\x88\x03\x02\x02\x02\u01AD" +
		"\u01B1\x07\x7F\x02\x02\u01AE\u01B0\x05\x9DO\x02\u01AF\u01AE\x03\x02\x02" +
		"\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2" +
		"\x03\x02\x02\x02\u01B2\u01B4\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02" +
		"\u01B4\u01B5\x07}\x02\x02\u01B5\x8A\x03\x02\x02\x02\u01B6\u01BA\x07\x7F" +
		"\x02\x02\u01B7\u01B9\x05\x9DO\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC" +
		"\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02" +
		"\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\x07" +
		")\x02\x02\u01BE\x8C\x03\x02\x02\x02\u01BF\u01C3\t\x02\x02\x02\u01C0\u01C2" +
		"\t\x03\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02" +
		"\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\x8E\x03" +
		"\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01CB\x05\x93J\x02\u01C7" +
		"\u01CB\x05\x97L\x02\u01C8\u01CB\x05\x95K\x02\u01C9\u01CB\x05\x99M\x02" +
		"\u01CA\u01C6\x03\x02\x02\x02\u01CA\u01C7\x03\x02\x02\x02\u01CA\u01C8\x03" +
		"\x02\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC" +
		"\u01CD\bH\t\x02\u01CD\x90\x03\x02\x02\x02\u01CE\u01CF\v\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01D1\bI\n\x02\u01D1\x92\x03\x02\x02\x02" +
		"\u01D2\u01D4\t\x04\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6" +
		"\x94\x03\x02\x02\x02\u01D7\u01D8\x071\x02\x02\u01D8\u01D9\x07,\x02\x02" +
		"\u01D9\u01DD\x03\x02\x02\x02\u01DA\u01DC\v\x02\x02\x02\u01DB\u01DA\x03" +
		"\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DD" +
		"\u01DB\x03\x02\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
		"\x02\x02\u01E0\u01E1\x07,\x02\x02\u01E1\u01E2\x071\x02\x02\u01E2\x96\x03" +
		"\x02\x02\x02\u01E3\u01E4\x071\x02\x02\u01E4\u01E5\x071\x02\x02\u01E5\u01E9" +
		"\x03\x02\x02\x02\u01E6\u01E8\n\x05\x02\x02\u01E7\u01E6\x03\x02\x02\x02" +
		"\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03" +
		"\x02\x02\x02\u01EA\x98\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC" +
		"\u01EE\x07^\x02\x02\u01ED\u01EF\x05\x93J\x02\u01EE\u01ED\x03\x02\x02\x02" +
		"\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F5\x03\x02\x02\x02\u01F0\u01F2\x07" +
		"\x0F\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u01F6\x07\f\x02\x02\u01F4\u01F6\x07\x0F\x02" +
		"\x02\u01F5\u01F1\x03\x02\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6\x9A" +
		"\x03\x02\x02\x02\u01F7\u01F9\t\x06\x02\x02\u01F8\u01FA\t\x06\x02\x02\u01F9" +
		"\u01F8\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB\x03\x02" +
		"\x02\x02\u01FB\u01FD\x07z\x02\x02\u01FC\u01FE\t\x07\x02\x02\u01FD\u01FC" +
		"\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u0209\x03\x02\x02\x02\u0201\u0203\x07" +
		"a\x02\x02\u0202\u0204\t\x07\x02\x02\u0203\u0202\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0201\x03\x02\x02\x02\u0208" +
		"\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02" +
		"\x02\x02\u020A\u021D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C" +
		"\u020E\t\x06\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02" +
		"\x02\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0219" +
		"\x03\x02\x02\x02\u0211\u0213\x07a\x02\x02\u0212\u0214\t\x06\x02\x02\u0213" +
		"\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0213\x03\x02" +
		"\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217" +
		"\u0211\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02" +
		"\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B" +
		"\u0219\x03\x02\x02\x02\u021C\u01F7\x03\x02\x02\x02\u021C\u020D\x03\x02" +
		"\x02\x02\u021D\x9C\x03\x02\x02\x02\u021E\u0222\n\b\x02\x02\u021F\u0220" +
		"\x07^\x02\x02\u0220\u0222\t\t\x02\x02\u0221\u021E\x03\x02\x02\x02\u0221" +
		"\u021F\x03\x02\x02\x02\u0222\x9E\x03\x02\x02\x02 \x02\xDF\xE7\xEB\xEE" +
		"\xF0\u018F\u0193\u0197\u019D\u01A8\u01B1\u01BA\u01C3\u01CA\u01D5\u01DD" +
		"\u01E9\u01EE\u01F1\u01F5\u01F9\u01FF\u0205\u0209\u020F\u0215\u0219\u021C" +
		"\u0221\v\x03\x0E\x02\x03\x15\x03\x03\x16\x04\x03\x17\x05\x03\x18\x06\x03" +
		"\x19\x07\x03\x1A\b\b\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

