// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN = 3;
	public static readonly CLOSE = 4;
	public static readonly FLOAT = 5;
	public static readonly INTEGER = 6;
	public static readonly STRING = 7;
	public static readonly KEYWORD = 8;
	public static readonly OPERATOR = 9;
	public static readonly MEMBER_OPERATOR = 10;
	public static readonly COMMA = 11;
	public static readonly ASSIGN = 12;
	public static readonly COLON = 13;
	public static readonly ID = 14;
	public static readonly NL = 15;
	public static readonly LINE_COMMENT = 16;
	public static readonly WS = 17;
	public static readonly BLOCK_COMMENT = 18;
	public static readonly LINE_JOINING = 19;
	public static readonly UNEXPECTED = 20;
	public static readonly RULE_expression = 0;
	public static readonly RULE_parameters = 1;
	public static readonly RULE_source = 2;
	public static readonly RULE_body = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "parameters", "source", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "FLOAT", "INTEGER", "STRING", 
		"KEYWORD", "OPERATOR", "MEMBER_OPERATOR", "COMMA", "ASSIGN", "COLON", 
		"ID", "NL", "LINE_COMMENT", "WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, XonParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 9;
				this.match(XonParser.ID);
				}
				break;
			case XonParser.FLOAT:
				{
				_localctx = new FloatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 10;
				this.match(XonParser.FLOAT);
				}
				break;
			case XonParser.INTEGER:
				{
				_localctx = new IntegerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 11;
				this.match(XonParser.INTEGER);
				}
				break;
			case XonParser.STRING:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 12;
				this.match(XonParser.STRING);
				}
				break;
			case XonParser.OPEN:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 13;
				this.parameters();
				}
				break;
			case XonParser.OPERATOR:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 14;
				this.match(XonParser.OPERATOR);
				this.state = 15;
				this.expression(3);
				}
				break;
			case XonParser.KEYWORD:
				{
				_localctx = new KeywordExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 16;
				this.match(XonParser.KEYWORD);
				this.state = 18;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 17;
					this.expression(0);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 36;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 34;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 22;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 23;
						this.match(XonParser.OPERATOR);
						this.state = 24;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 25;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 26;
						this.match(XonParser.MEMBER_OPERATOR);
						this.state = 28;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
						case 1:
							{
							this.state = 27;
							this.match(XonParser.ID);
							}
							break;
						}
						}
						break;

					case 3:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 30;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 31;
						this.parameters();
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 32;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 33;
						this.match(XonParser.OPERATOR);
						}
						break;
					}
					}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(XonParser.OPEN);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.KEYWORD) | (1 << XonParser.OPERATOR) | (1 << XonParser.ID))) !== 0)) {
				{
				this.state = 40;
				this.expression(0);
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 42;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 41;
							this.match(XonParser.COMMA);
							}
							}
							this.state = 44;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === XonParser.COMMA);
						this.state = 46;
						this.expression(0);
						}
						}
					}
					this.state = 51;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 52;
					this.match(XonParser.COMMA);
					}
					}
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 60;
			this.match(XonParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 62;
				this.match(XonParser.NL);
				}
				break;
			}
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 65;
					this.expression(0);
					this.state = 66;
					_localctx._NL = this.match(XonParser.NL);
					_localctx._nl.push(_localctx._NL);
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN) | (1 << XonParser.FLOAT) | (1 << XonParser.INTEGER) | (1 << XonParser.STRING) | (1 << XonParser.KEYWORD) | (1 << XonParser.OPERATOR) | (1 << XonParser.ID))) !== 0)) {
				{
				this.state = 73;
				this.expression(0);
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.NL) {
				{
				this.state = 76;
				this.match(XonParser.NL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(XonParser.NL);
			this.state = 80;
			this.match(XonParser.INDENT);
			this.state = 81;
			this.source();
			this.state = 82;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16W\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x15\n" +
		"\x02\x05\x02\x17\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x05\x02\x1F\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02%\n\x02\f\x02" +
		"\x0E\x02(\v\x02\x03\x03\x03\x03\x03\x03\x06\x03-\n\x03\r\x03\x0E\x03." +
		"\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x03\x07\x038\n\x03\f" +
		"\x03\x0E\x03;\v\x03\x05\x03=\n\x03\x03\x03\x03\x03\x03\x04\x05\x04B\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04G\n\x04\f\x04\x0E\x04J\v\x04\x03\x04" +
		"\x05\x04M\n\x04\x03\x04\x05\x04P\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x02\x02\x03\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02" +
		"\x02\x02f\x02\x16\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x06A\x03\x02\x02" +
		"\x02\bQ\x03\x02\x02\x02\n\v\b\x02\x01\x02\v\x17\x07\x10\x02\x02\f\x17" +
		"\x07\x07\x02\x02\r\x17\x07\b\x02\x02\x0E\x17\x07\t\x02\x02\x0F\x17\x05" +
		"\x04\x03\x02\x10\x11\x07\v\x02\x02\x11\x17\x05\x02\x02\x05\x12\x14\x07" +
		"\n\x02\x02\x13\x15\x05\x02\x02\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03" +
		"\x02\x02\x02\x15\x17\x03\x02\x02\x02\x16\n\x03\x02\x02\x02\x16\f\x03\x02" +
		"\x02\x02\x16\r\x03\x02\x02\x02\x16\x0E\x03\x02\x02\x02\x16\x0F\x03\x02" +
		"\x02\x02\x16\x10\x03\x02\x02\x02\x16\x12\x03\x02\x02\x02\x17&\x03\x02" +
		"\x02\x02\x18\x19\f\x06\x02\x02\x19\x1A\x07\v\x02\x02\x1A%\x05\x02\x02" +
		"\x07\x1B\x1C\f\b\x02\x02\x1C\x1E\x07\f\x02\x02\x1D\x1F\x07\x10\x02\x02" +
		"\x1E\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F%\x03\x02\x02\x02" +
		" !\f\x07\x02\x02!%\x05\x04\x03\x02\"#\f\x04\x02\x02#%\x07\v\x02\x02$\x18" +
		"\x03\x02\x02\x02$\x1B\x03\x02\x02\x02$ \x03\x02\x02\x02$\"\x03\x02\x02" +
		"\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'\x03\x03" +
		"\x02\x02\x02(&\x03\x02\x02\x02)<\x07\x05\x02\x02*3\x05\x02\x02\x02+-\x07" +
		"\r\x02\x02,+\x03\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03" +
		"\x02\x02\x02/0\x03\x02\x02\x0202\x05\x02\x02\x021,\x03\x02\x02\x0225\x03" +
		"\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0249\x03\x02\x02\x0253\x03" +
		"\x02\x02\x0268\x07\r\x02\x0276\x03\x02\x02\x028;\x03\x02\x02\x0297\x03" +
		"\x02\x02\x029:\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02<*\x03" +
		"\x02\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x07\x06\x02\x02?\x05" +
		"\x03\x02\x02\x02@B\x07\x11\x02\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"BH\x03\x02\x02\x02CD\x05\x02\x02\x02DE\x07\x11\x02\x02EG\x03\x02\x02\x02" +
		"FC\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"IL\x03\x02\x02\x02JH\x03\x02\x02\x02KM\x05\x02\x02\x02LK\x03\x02\x02\x02" +
		"LM\x03\x02\x02\x02MO\x03\x02\x02\x02NP\x07\x11\x02\x02ON\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02P\x07\x03\x02\x02\x02QR\x07\x11\x02\x02RS\x07\x03\x02" +
		"\x02ST\x05\x06\x04\x02TU\x07\x04\x02\x02U\t\x03\x02\x02\x02\x0F\x14\x16" +
		"\x1E$&.39<AHLO";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatExpressionContext extends ExpressionContext {
	public FLOAT(): TerminalNode { return this.getToken(XonParser.FLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntegerExpressionContext extends ExpressionContext {
	public INTEGER(): TerminalNode { return this.getToken(XonParser.INTEGER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringExpressionContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(XonParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MEMBER_OPERATOR(): TerminalNode { return this.getToken(XonParser.MEMBER_OPERATOR, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OPERATOR(): TerminalNode { return this.getToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public OPERATOR(): TerminalNode { return this.getToken(XonParser.OPERATOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PostfixExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OPERATOR(): TerminalNode { return this.getToken(XonParser.OPERATOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class KeywordExpressionContext extends ExpressionContext {
	public KEYWORD(): TerminalNode { return this.getToken(XonParser.KEYWORD, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ParametersContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(XonParser.OPEN, 0); }
	public CLOSE(): TerminalNode { return this.getToken(XonParser.CLOSE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


export class SourceContext extends ParserRuleContext {
	public _NL!: Token;
	public _nl: Token[] = [];
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class BodyContext extends ParserRuleContext {
	public NL(): TerminalNode { return this.getToken(XonParser.NL, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public source(): SourceContext {
		return this.getRuleContext(0, SourceContext);
	}
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


