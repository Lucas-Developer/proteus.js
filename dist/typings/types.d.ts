import * as CBOR from 'wire-webapp-cbor';

/** @module derived */
export module derived {
   /**
    * @class CipherKey
    * @param {!Uint8Array} key
    * @returns {CipherKey} - `this`
    */
   class CipherKey {
       /**
        * @class CipherKey
        * @param {!Uint8Array} key
        * @returns {CipherKey} - `this`
        */
       constructor(key: Uint8Array);

       /**
        * @param {!(ArrayBuffer|String|Uint8Array)} plaintext - The text to encrypt
        * @param {!Uint8Array} nonce - Counter as nonce
        * @returns {Uint8Array} - Encrypted payload
        */
       encrypt(plaintext: (ArrayBuffer|String|Uint8Array), nonce: Uint8Array): Uint8Array;

       /**
        * @param {!Uint8Array} ciphertext
        * @param {!Uint8Array} nonce
        * @returns {Uint8Array}
        */
       decrypt(ciphertext: Uint8Array, nonce: Uint8Array): Uint8Array;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Encoder} d
        * @returns {CipherKey}
        */
       static decode(d: CBOR.Encoder): CipherKey;

   }

   /**
    * @class DerivedSecrets
    */
   class DerivedSecrets {
       /**
        * @class DerivedSecrets
        */
       constructor();

       /**
        * @param {!Array<number>} input
        * @param {!Uint8Array} salt
        * @param {!string} info
        * @returns {DerivedSecrets} - `this`
        */
       static kdf(input: number[], salt: Uint8Array, info: string): DerivedSecrets;

       /**
        * @param {!Array<number>} input - Initial key material (usually the Master Key) in byte array format
        * @param {!string} info - Key Derivation Data
        * @returns {DerivedSecrets}
        */
       static kdf_without_salt(input: number[], info: string): DerivedSecrets;

   }

   /**
    * @class MacKey
    * @param {!Uint8Array} key - Mac Key in byte array format generated by derived secrets
    * @returns {MacKey} - `this`
    */
   class MacKey {
       /**
        * @class MacKey
        * @param {!Uint8Array} key - Mac Key in byte array format generated by derived secrets
        * @returns {MacKey} - `this`
        */
       constructor(key: Uint8Array);

       /**
        * Hash-based message authentication code
        * @param {!(string|Uint8Array)} msg
        * @returns {Uint8Array}
        */
       sign(msg: (string|Uint8Array)): Uint8Array;

       /**
        * @param {!Uint8Array} signature
        * @param {!Uint8Array} msg
        * @returns {boolean}
        */
       verify(signature: Uint8Array, msg: Uint8Array): boolean;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {MacKey}
        */
       static decode(d: CBOR.Decoder): MacKey;

   }

}

/** @module errors */
export module errors {
   /**
    * @extends ProteusError
    * @param {string} [message]
    * @returns {string}
    */
   class DecodeError extends ProteusError {
       /**
        * @extends ProteusError
        * @param {string} [message]
        * @returns {string}
        */
       constructor(message?: string);

   }

   /**
    * @extends DecodeError
    * @param {string} [message]
    * @returns {string}
    */
   class InvalidType extends DecodeError {
       /**
        * @extends DecodeError
        * @param {string} [message]
        * @returns {string}
        */
       constructor(message?: string);

   }

   /**
    * @extends DecodeError
    * @param {string} [message]
    * @returns {string}
    */
   class InvalidArrayLen extends DecodeError {
       /**
        * @extends DecodeError
        * @param {string} [message]
        * @returns {string}
        */
       constructor(message?: string);

   }

   /**
    * @extends DecodeError
    * @param {string} [message]
    * @returns {string}
    */
   class LocalIdentityChanged extends DecodeError {
       /**
        * @extends DecodeError
        * @param {string} [message]
        * @returns {string}
        */
       constructor(message?: string);

   }

   /**
    * @extends ProteusError
    * @param {string} [message]
    */
   class DecryptError extends ProteusError {
       /**
        * @extends ProteusError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class RemoteIdentityChanged extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class InvalidSignature extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class InvalidMessage extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class DuplicateMessage extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class TooDistantFuture extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class OutdatedMessage extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @extends DecryptError
    * @param {string} [message]
    */
   class PrekeyNotFound extends DecryptError {
       /**
        * @extends DecryptError
        * @param {string} [message]
        */
       constructor(message?: string);

   }

   /**
    * @class ProteusError
    * @param {string} message
    * @extends Error
    * @returns {ProteusError} - `this`
    */
   class ProteusError extends Error {
       /**
        * @class ProteusError
        * @param {string} message
        * @extends Error
        * @returns {ProteusError} - `this`
        */
       constructor(message: string);

   }

}

/** @module keys */
export module keys {
   /**
    * Construct a long-term identity key pair.
    * @classdesc Every client has a long-term identity key pair.
    * Long-term identity keys are used to initialise "sessions" with other clients (triple DH).
    * @param {!keys.PublicKey} public_key
    * @returns {IdentityKey} - `this`
    */
   class IdentityKey {
       /**
        * Construct a long-term identity key pair.
        * @classdesc Every client has a long-term identity key pair.
        * Long-term identity keys are used to initialise "sessions" with other clients (triple DH).
        * @param {!keys.PublicKey} public_key
        * @returns {IdentityKey} - `this`
        */
       constructor(public_key: keys.PublicKey);

       /** @returns {string} */
       fingerprint(): string;

       /** @returns {string} */
       toString(): string;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {IdentityKey}
        */
       static decode(d: CBOR.Decoder): IdentityKey;

   }

   /**
    * @class IdentityKeyPair
    * @returns {IdentityKeyPair} - `this`
    */
   class IdentityKeyPair {
       /**
        * @class IdentityKeyPair
        * @returns {IdentityKeyPair} - `this`
        */
       constructor();

       /** @returns {ArrayBuffer} */
       serialise(): ArrayBuffer;

       /**
        * @param {!ArrayBuffer} buf
        * @returns {IdentityKeyPair}
        */
       static deserialise(buf: ArrayBuffer): IdentityKeyPair;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {IdentityKeyPair}
        */
       static decode(d: CBOR.Decoder): IdentityKeyPair;

   }

   /**
    * Construct an ephemeral key pair.
    * @class KeyPair
    * @returns {KeyPair} - `this`
    */
   class KeyPair {
       /**
        * Construct an ephemeral key pair.
        * @class KeyPair
        * @returns {KeyPair} - `this`
        */
       constructor();

       /**
        * @description Ed25519 keys can be converted to Curve25519 keys, so that the same key pair can be
        * used both for authenticated encryption (crypto_box) and for signatures (crypto_sign).
        * @param {!Uint8Array} ed25519_key_pair - Key pair based on Edwards-curve (Ed25519)
        * @returns {keys.SecretKey} - Constructed private key
        * @private
        * @see https://download.libsodium.org/doc/advanced/ed25519-curve25519.html
        */
       private _construct_private_key(ed25519_key_pair: Uint8Array): keys.SecretKey;

       /**
        * @param {!libsodium_keypair} ed25519_key_pair - Key pair based on Edwards-curve (Ed25519)
        * @private
        * @returns {keys.PublicKey} - Constructed public key
        */
       private _construct_public_key(ed25519_key_pair: libsodium_keypair): keys.PublicKey;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {KeyPair}
        */
       static decode(d: CBOR.Decoder): KeyPair;

   }

   /**
    * @typedef {Object} libsodium_keypair
    * @param {!Uint8Array} publicKey
    * @param {!Uint8Array} privateKey
    * @param {!string} keyType
    */
   type libsodium_keypair = Object;

   /**
    * A Pre-Shared Key contains the public long-term identity and ephemeral handshake keys for the initial triple DH.
    * @class PreKey
    * @classdesc Pre-generated (and regularly refreshed) pre-keys.
    * @param {!number} pre_key_id
    * @returns {PreKey} - `this`
    * @throws {RangeError}
    */
   class PreKey {
       /**
        * A Pre-Shared Key contains the public long-term identity and ephemeral handshake keys for the initial triple DH.
        * @class PreKey
        * @classdesc Pre-generated (and regularly refreshed) pre-keys.
        * @param {!number} pre_key_id
        * @returns {PreKey} - `this`
        * @throws {RangeError}
        */
       constructor(pre_key_id: number);

       /** @type {number} */
       static MAX_PREKEY_ID: number;

       /** @returns {PreKey} */
       static last_resort(): PreKey;

       /**
        * @param {!number} start
        * @param {!number} size
        * @returns {Array<PreKey>}
        * @throws {RangeError}
        */
       static generate_prekeys(start: number, size: number): PreKey[];

       /** @returns {ArrayBuffer} */
       serialise(): ArrayBuffer;

       /**
        * @param {!ArrayBuffer} buf
        * @returns {PreKey}
        */
       static deserialise(buf: ArrayBuffer): PreKey;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {PreKey}
        */
       static decode(d: CBOR.Decoder): PreKey;

   }

   /** @class PreKeyAuth */
   class PreKeyAuth {
       /** @class PreKeyAuth */
       constructor();

       /** @type {string} */
       static INVALID: string;

       /** @type {string} */
       static UNKNOWN: string;

       /** @type {string} */
       static VALID: string;

   }

   /**
    * @class PreKeyBundle
    * @param {keys.IdentityKey} public_identity_key
    * @param {keys.PreKey} prekey
    * @returns {PreKeyBundle} - `this`
    */
   class PreKeyBundle {
       /**
        * @class PreKeyBundle
        * @param {keys.IdentityKey} public_identity_key
        * @param {keys.PreKey} prekey
        * @returns {PreKeyBundle} - `this`
        */
       constructor(public_identity_key: keys.IdentityKey, prekey: keys.PreKey);

       /**
        * @param {!keys.IdentityKeyPair} identity_pair
        * @param {!keys.PreKey} prekey
        * @returns {PreKeyBundle}
        */
       static signed(identity_pair: keys.IdentityKeyPair, prekey: keys.PreKey): PreKeyBundle;

       /** @returns {keys.PreKeyAuth} */
       verify(): keys.PreKeyAuth;

       /** @returns {ArrayBuffer} */
       serialise(): ArrayBuffer;

       /** @returns {type_serialised_json} */
       serialised_json(): type_serialised_json;

       /**
        * @param {!ArrayBuffer} buf
        * @returns {PreKeyBundle}
        */
       static deserialise(buf: ArrayBuffer): PreKeyBundle;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {PreKeyBundle}
        */
       static decode(d: CBOR.Decoder): PreKeyBundle;

   }

   /**
    * @typedef {Object} type_serialised_json
    * @property {number} id
    * @property {string} key
    */
   interface type_serialised_json {
       id: number;
       key: string;
   }


   /**
    * @class PublicKey
    * @param {Uint8Array} [pub_edward]
    * @param {Uint8Array} [pub_curve]
    * @returns {PublicKey} - `this`
    */
   class PublicKey {
       /**
        * @class PublicKey
        * @param {Uint8Array} [pub_edward]
        * @param {Uint8Array} [pub_curve]
        * @returns {PublicKey} - `this`
        */
       constructor(pub_edward?: Uint8Array, pub_curve?: Uint8Array);

       /**
        * This function can be used to verify a message signature.
        *
        * @param {!Uint8Array} signature - The signature to verify
        * @param {!string} message - The message from which the signature was computed.
        * @returns {boolean} - `true` if the signature is valid, `false` otherwise.
        */
       verify(signature: Uint8Array, message: string): boolean;

       /** @returns {string} */
       fingerprint(): string;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {PublicKey}
        */
       static decode(d: CBOR.Decoder): PublicKey;

   }

   /**
    * @class SecretKey
    * @param {!Uint8Array} sec_edward
    * @param {!Uint8Array} sec_curve
    * @returns {SecretKey} - `this`
    */
   class SecretKey {
       /**
        * @class SecretKey
        * @param {!Uint8Array} sec_edward
        * @param {!Uint8Array} sec_curve
        * @returns {SecretKey} - `this`
        */
       constructor(sec_edward: Uint8Array, sec_curve: Uint8Array);

       /**
        * This function can be used to compute a message signature.
        * @param {!string} message - Message to be signed
        * @returns {Uint8Array} - A message signature
        */
       sign(message: string): Uint8Array;

       /**
        * This function can be used to compute a shared secret given a user's secret key and another
        * user's public key.
        * @param {!keys.PublicKey} public_key - Another user's public key
        * @returns {Uint8Array} - Array buffer view of the computed shared secret
        */
       shared_secret(public_key: keys.PublicKey): Uint8Array;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {SecretKey}
        */
       static decode(d: CBOR.Decoder): SecretKey;

   }

}

/** @module message */
export module message {
   /**
    * @extends Message
    * @param {!message.SessionTag} session_tag
    * @param {!number} counter
    * @param {!number} prev_counter
    * @param {!keys.PublicKey} ratchet_key
    * @param {!Uint8Array} cipher_text
    * @returns {CipherMessage} - `this`
    */
   class CipherMessage extends Message {
       /**
        * @extends Message
        * @param {!message.SessionTag} session_tag
        * @param {!number} counter
        * @param {!number} prev_counter
        * @param {!keys.PublicKey} ratchet_key
        * @param {!Uint8Array} cipher_text
        * @returns {CipherMessage} - `this`
        */
       constructor(session_tag: message.SessionTag, counter: number, prev_counter: number, ratchet_key: keys.PublicKey, cipher_text: Uint8Array);

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {CipherMessage}
        */
       static decode(d: CBOR.Decoder): CipherMessage;

   }

   /**
    * @class Envelope
    * @param {derived.MacKey} mac_key
    * @param {!message.Message} message
    * @returns {Envelope}
    */
   class Envelope {
       /**
        * @class Envelope
        * @param {derived.MacKey} mac_key
        * @param {!message.Message} message
        * @returns {Envelope}
        */
       constructor(mac_key: derived.MacKey, message: message.Message);

       /**
        * @param {!derived.MacKey} mac_key
        * @returns {boolean}
        */
       verify(mac_key: derived.MacKey): boolean;

       /** @returns {ArrayBuffer} - The serialized message envelope */
       serialise(): ArrayBuffer;

       /**
        * @param {!ArrayBuffer} buf
        * @returns {Envelope}
        */
       static deserialise(buf: ArrayBuffer): Envelope;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {Envelope}
        */
       static decode(d: CBOR.Decoder): Envelope;

   }

   /** @class Message */
   class Message {
       /** @class Message */
       constructor();

       /** @returns {ArrayBuffer} */
       serialise(): ArrayBuffer;

       /**
        * @param {!ArrayBuffer} buf
        * @returns {message.CipherMessage|message.PreKeyMessage}
        */
       static deserialise(buf: ArrayBuffer): (message.CipherMessage|message.PreKeyMessage);

   }

   /**
    * @extends Message
    * @param {!number} prekey_id
    * @param {!keys.PublicKey} base_key
    * @param {!keys.IdentityKey} identity_key
    * @param {!message.CipherMessage} message
    * @returns {PreKeyMessage}
    */
   class PreKeyMessage extends Message {
       /**
        * @extends Message
        * @param {!number} prekey_id
        * @param {!keys.PublicKey} base_key
        * @param {!keys.IdentityKey} identity_key
        * @param {!message.CipherMessage} message
        * @returns {PreKeyMessage}
        */
       constructor(prekey_id: number, base_key: keys.PublicKey, identity_key: keys.IdentityKey, message: message.CipherMessage);

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {PreKeyMessage}
        */
       static decode(d: CBOR.Decoder): PreKeyMessage;

   }

   /**
    * @class SessionTag
    * @returns {SessionTag} - `this`
    */
   class SessionTag {
       /**
        * @class SessionTag
        * @returns {SessionTag} - `this`
        */
       constructor();

       /** @returns {string} */
       toString(): string;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {SessionTag}
        */
       static decode(d: CBOR.Decoder): SessionTag;

   }

}

/** @module session */
export module session {
   /**
    * @class ChainKey
    */
   class ChainKey {
       /**
        * @class ChainKey
        */
       constructor();

       /**
        * @param {!derived.MacKey} key - Mac Key generated by derived secrets
        * @param {!number} counter
        * @returns {ChainKey}
        */
       static from_mac_key(key: derived.MacKey, counter: number): ChainKey;

       /** @returns {ChainKey} */
       next(): ChainKey;

       /** @returns {session.MessageKeys} */
       message_keys(): session.MessageKeys;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {ChainKey}
        */
       static decode(d: CBOR.Decoder): ChainKey;

   }

   /**
    * @class MessageKeys
    * @param {!derived.CipherKey} cipher_key
    * @param {!derived.MacKey} mac_key
    * @param {!number} counter
    * @returns {MessageKeys} - `this`
    */
   class MessageKeys {
       /**
        * @class MessageKeys
        * @param {!derived.CipherKey} cipher_key
        * @param {!derived.MacKey} mac_key
        * @param {!number} counter
        * @returns {MessageKeys} - `this`
        */
       constructor(cipher_key: derived.CipherKey, mac_key: derived.MacKey, counter: number);

       /**
        * @returns {Uint8Array}
        * @private
        */
       private _counter_as_nonce(): Uint8Array;

       /**
        * @param {!(string|Uint8Array)} plaintext
        * @returns {Uint8Array}
        */
       encrypt(plaintext: (string|Uint8Array)): Uint8Array;

       /**
        * @param {!Uint8Array} ciphertext
        * @returns {Uint8Array}
        */
       decrypt(ciphertext: Uint8Array): Uint8Array;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {MessageKeys}
        */
       static decode(d: CBOR.Decoder): MessageKeys;

   }

   /** @class PreKeyStore */
   class PreKeyStore {
       /** @class PreKeyStore */
       constructor();

       /**
        * @param {!number} prekey_id
        * @returns {void}
        * @throws {Error}
        */
       get_prekey(prekey_id: number): void;

       /**
        * @param {!number} prekey_id
        * @returns {void}
        * @throws {Error}
        */
       remove(prekey_id: number): void;

   }

   /**
    * @class RecvChain
    * @param {!session.ChainKey} chain_key
    * @param {!keys.PublicKey} public_key
    * @returns {message.PreKeyMessage} - `this`
    */
   class RecvChain {
       /**
        * @class RecvChain
        * @param {!session.ChainKey} chain_key
        * @param {!keys.PublicKey} public_key
        * @returns {message.PreKeyMessage} - `this`
        */
       constructor(chain_key: session.ChainKey, public_key: keys.PublicKey);

       /** @type {number} */
       static MAX_COUNTER_GAP: number;

       /**
        * @param {!message.Envelope} envelope
        * @param {!message.CipherMessage} msg
        * @returns {Uint8Array}
        */
       try_message_keys(envelope: message.Envelope, msg: message.CipherMessage): Uint8Array;

       /**
        * @param {!message.CipherMessage} msg
        * @returns {Array<session.ChainKey>|session.MessageKeys}
        */
       stage_message_keys(msg: message.CipherMessage): (session.ChainKey[]|session.MessageKeys);

       /**
        * @param {!Array<session.MessageKeys>} keys
        * @returns {void}
        */
       commit_message_keys(keys: session.MessageKeys[]): void;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {Array<CBOR.Encoder>}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder[];

       /**
        * @param {!CBOR.Decoder} d
        * @returns {RecvChain}
        */
       static decode(d: CBOR.Decoder): RecvChain;

   }

   /**
    * @class RootKey
    */
   class RootKey {
       /**
        * @class RootKey
        */
       constructor();

       /**
        * @param {!derived.CipherKey} cipher_key - Cipher key generated by derived secrets
        * @returns {RootKey}
        */
       static from_cipher_key(cipher_key: derived.CipherKey): RootKey;

       /**
        * @param {!keys.KeyPair} ours - Our key pair
        * @param {!keys.PublicKey} theirs - Their public key
        * @returns {Array<RootKey|session.ChainKey>}
        */
       dh_ratchet(ours: keys.KeyPair, theirs: keys.PublicKey): (RootKey|session.ChainKey)[];

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {RootKey}
        */
       static decode(d: CBOR.Decoder): RootKey;

   }

   /**
    * @class SendChain
    * @param {session.ChainKey} chain_key
    * @param {keys.KeyPair} keypair
    */
   class SendChain {
       /**
        * @class SendChain
        * @param {session.ChainKey} chain_key
        * @param {keys.KeyPair} keypair
        */
       constructor(chain_key: session.ChainKey, keypair: keys.KeyPair);

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {SendChain}
        */
       static decode(d: CBOR.Decoder): SendChain;

   }

   /**
    * @class Session
    */
   class Session {
       /**
        * @class Session
        */
       constructor();

       /** @type {number} */
       static MAX_RECV_CHAINS: number;

       /** @type {number} */
       static MAX_SESSION_STATES: number;

       /**
        * @param {!keys.IdentityKeyPair} local_identity - Alice's Identity Key Pair
        * @param {!keys.PreKeyBundle} remote_pkbundle - Bob's Pre-Key Bundle
        * @returns {Promise<Session>}
        */
       static init_from_prekey(local_identity: keys.IdentityKeyPair, remote_pkbundle: keys.PreKeyBundle): Promise<Session>;

       /**
        * @param {!keys.IdentityKeyPair} our_identity
        * @param {!session.PreKeyStore} prekey_store
        * @param {!message.Envelope} envelope
        * @returns {Promise<Array<Session|string>>}
        * @throws {errors.DecryptError.InvalidMessage}
        * @throws {errors.DecryptError.PrekeyNotFound}
        */
       static init_from_message(our_identity: keys.IdentityKeyPair, prekey_store: session.PreKeyStore, envelope: message.Envelope): Promise<(Session|string)[]>;

       /**
        * @param {!session.PreKeyStore} pre_key_store
        * @param {!message.PreKeyMessage} pre_key_message
        * @returns {Promise<session.SessionState>}
        * @private
        * @throws {errors.ProteusError}
        */
       private _new_state(pre_key_store: session.PreKeyStore, pre_key_message: message.PreKeyMessage): Promise<session.SessionState>;

       /**
        * @param {!message.SessionTag} tag
        * @param {!session.SessionState} state
        * @returns {boolean}
        * @private
        */
       private _insert_session_state(tag: message.SessionTag, state: session.SessionState): boolean;

       /**
        * @returns {void}
        * @private
        */
       private _evict_oldest_session_state(): void;

       /** @returns {keys.PublicKey} */
       get_local_identity(): keys.PublicKey;

       /**
        * @param {!(String|Uint8Array)} plaintext - The plaintext which needs to be encrypted
        * @return {Promise<message.Envelope>} Encrypted message
        */
       encrypt(plaintext: (String|Uint8Array)): Promise<message.Envelope>;

       /**
        * @param {!session.PreKeyStore} prekey_store
        * @param {!message.Envelope} envelope
        * @returns {Promise<string>}
        * @throws {errors.DecryptError}
        */
       decrypt(prekey_store: session.PreKeyStore, envelope: message.Envelope): Promise<string>;

       /**
        * @param {!message.Envelope} envelope
        * @param {!message.Message} msg
        * @param {!session.PreKeyStore} prekey_store
        * @private
        * @returns {Promise<string>}
        * @throws {errors.DecryptError}
        */
       private _decrypt_prekey_message(envelope: message.Envelope, msg: message.Message, prekey_store: session.PreKeyStore): Promise<string>;

       /**
        * @param {!message.Envelope} envelope
        * @param {!message.Message} msg
        * @private
        * @returns {string}
        */
       private _decrypt_cipher_message(envelope: message.Envelope, msg: message.Message): string;

       /**
        * @returns {ArrayBuffer}
        */
       serialise(): ArrayBuffer;

       /**
        * @param {!keys.IdentityKeyPair} local_identity
        * @param {!ArrayBuffer} buf
        * @returns {Session}
        */
       static deserialise(local_identity: keys.IdentityKeyPair, buf: ArrayBuffer): Session;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {void}
        */
       encode(e: CBOR.Encoder): void;

       /**
        * @param {!keys.IdentityKeyPair} local_identity
        * @param {!CBOR.Decoder} d
        * @returns {Session}
        */
       static decode(local_identity: keys.IdentityKeyPair, d: CBOR.Decoder): Session;

   }

   /** @class SessionState */
   class SessionState {
       /** @class SessionState */
       constructor();

       /**
        * @param {!keys.IdentityKeyPair} alice_identity_pair
        * @param {!keys.PublicKey} alice_base
        * @param {!keys.PreKeyBundle} bob_pkbundle
        * @returns {SessionState}
        */
       static init_as_alice(alice_identity_pair: keys.IdentityKeyPair, alice_base: keys.PublicKey, bob_pkbundle: keys.PreKeyBundle): SessionState;

       /**
        * @param {!keys.IdentityKeyPair} bob_ident
        * @param {!keys.KeyPair} bob_prekey
        * @param {!keys.IdentityKey} alice_ident
        * @param {!keys.PublicKey} alice_base
        * @returns {SessionState}
        */
       static init_as_bob(bob_ident: keys.IdentityKeyPair, bob_prekey: keys.KeyPair, alice_ident: keys.IdentityKey, alice_base: keys.PublicKey): SessionState;

       /**
        * @param {!keys.KeyPair} ratchet_key
        * @returns {void}
        */
       ratchet(ratchet_key: keys.KeyPair): void;

       /**
        * @param {!keys.IdentityKey} identity_key - Public identity key of the local identity key pair
        * @param {!Array<number>} pending - Pending pre-key
        * @param {!message.SessionTag} tag - Session tag
        * @param {!(string|Uint8Array)} plaintext - The plaintext to encrypt
        * @returns {message.Envelope}
        */
       encrypt(identity_key: keys.IdentityKey, pending: number[], tag: message.SessionTag, plaintext: (string|Uint8Array)): message.Envelope;

       /**
        * @param {!message.Envelope} envelope
        * @param {!message.CipherMessage} msg
        * @returns {Uint8Array}
        */
       decrypt(envelope: message.Envelope, msg: message.CipherMessage): Uint8Array;

       /** @returns {ArrayBuffer} */
       serialise(): ArrayBuffer;

       /**
        * @param {!CBOR.Encoder} e
        * @returns {CBOR.Encoder}
        */
       encode(e: CBOR.Encoder): CBOR.Encoder;

       /**
        * @param {!CBOR.Decoder} d
        * @returns {SessionState}
        */
       static decode(d: CBOR.Decoder): SessionState;

   }

}

/** @module util */
export module util {
   /**
    * Concatenates array buffers (usually 8-bit unsigned).
    * @class ArrayUtil
    */
   class ArrayUtil {
       /**
        * Concatenates array buffers (usually 8-bit unsigned).
        * @class ArrayUtil
        */
       constructor();

       /**
        * @param {!Array<ArrayBuffer>} buffers
        * @returns {Array<ArrayBuffer>}
        */
       static concatenate_array_buffers(buffers: ArrayBuffer[]): ArrayBuffer[];

       /**
        * @param {!(Array<number>|Uint8Array)} array
        * @returns {void}
        * @throws {errors.ProteusError}
        */
       static assert_is_not_zeros(array: (number[]|Uint8Array)): void;

   }

   /**
    * @class MemoryUtil
    */
   class MemoryUtil {
       /**
        * @class MemoryUtil
        */
       constructor();

       /**
        * @param {!(Uint8Array|ArrayBuffer|Object)} object
        * @returns {void}
        */
       static zeroize(object: (Uint8Array|ArrayBuffer|Object)): void;

   }

   /** @class TypeUtil */
   class TypeUtil {
       /** @class TypeUtil */
       constructor();

       /**
        * @param {*} classes
        * @param {*} inst
        * @returns {void}
        * @throws {TypeError}
        */
       static assert_is_instance(classes: any, inst: any): void;

       /**
        * @param {*} inst
        * @returns {boolean}
        * @throws {TypeError}
        */
       static assert_is_integer(inst: any): boolean;

   }

}

