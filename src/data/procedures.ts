export interface ProcedureStep {
  step: number;
  action: string;
  rationale?: string;
}

export interface Procedure {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  indications: string[];
  contraindications: string[];
  equipment: string[];
  preparation: string[];
  steps: ProcedureStep[];
  safetyAlerts: string[];
  nursingConsiderations: string[];
  postProcedureCare: string[];
  documentation: string[];
  commonErrors: string[];
  tips: string[];
  references: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  procedureCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fundamentals of Nursing',
    slug: 'fundamentals',
    description: 'Core nursing skills including hygiene, positioning, and basic patient care',
    icon: 'Heart',
    procedureCount: 12
  },
  {
    id: '2',
    name: 'Vital Signs',
    slug: 'vital-signs',
    description: 'Assessment and monitoring of temperature, pulse, respiration, and blood pressure',
    icon: 'Activity',
    procedureCount: 8
  },
  {
    id: '3',
    name: 'Infection Control',
    slug: 'infection-control',
    description: 'Hand hygiene, PPE use, isolation precautions, and sterile technique',
    icon: 'Shield',
    procedureCount: 10
  },
  {
    id: '4',
    name: 'Medication Administration',
    slug: 'medication-administration',
    description: 'Safe medication practices including oral, parenteral, and topical routes',
    icon: 'Pill',
    procedureCount: 15
  },
  {
    id: '5',
    name: 'IV Therapy',
    slug: 'iv-therapy',
    description: 'Intravenous access, fluid administration, and IV medication delivery',
    icon: 'Droplet',
    procedureCount: 9
  },
  {
    id: '6',
    name: 'Wound Care',
    slug: 'wound-care',
    description: 'Wound assessment, dressing changes, and wound healing management',
    icon: 'Bandage',
    procedureCount: 11
  },
  {
    id: '7',
    name: 'Oxygen Therapy',
    slug: 'oxygen-therapy',
    description: 'Oxygen delivery systems, monitoring, and respiratory support',
    icon: 'Wind',
    procedureCount: 7
  },
  {
    id: '8',
    name: 'Catheterization',
    slug: 'catheterization',
    description: 'Urinary catheter insertion, care, and removal procedures',
    icon: 'CircleDot',
    procedureCount: 6
  },
  {
    id: '9',
    name: 'Nasogastric Procedures',
    slug: 'nasogastric',
    description: 'NG tube insertion, feeding, medication administration, and removal',
    icon: 'Utensils',
    procedureCount: 5
  },
  {
    id: '10',
    name: 'Emergency Procedures',
    slug: 'emergency',
    description: 'Basic life support, emergency response, and critical interventions',
    icon: 'Siren',
    procedureCount: 8
  }
];

export const procedures: Procedure[] = [
  {
    id: 'hand-hygiene',
    title: 'Hand Hygiene',
    category: 'Infection Control',
    categorySlug: 'infection-control',
    description: 'Hand hygiene is the single most important practice for preventing healthcare-associated infections. It involves cleaning hands using soap and water or alcohol-based hand rub to remove or destroy microorganisms.',
    indications: [
      'Before and after patient contact',
      'Before aseptic procedures',
      'After exposure to body fluids',
      'After touching patient surroundings',
      'Before putting on and after removing gloves'
    ],
    contraindications: [
      'Alcohol-based rub contraindicated when hands are visibly soiled',
      'Use soap and water when caring for patients with C. difficile or norovirus'
    ],
    equipment: [
      'Soap and running water OR',
      'Alcohol-based hand rub (60-95% alcohol)',
      'Clean paper towels',
      'Waste receptacle'
    ],
    preparation: [
      'Remove jewelry (rings, watches, bracelets)',
      'Ensure nails are short and clean',
      'Roll sleeves above wrists',
      'Check for skin integrity'
    ],
    steps: [
      { step: 1, action: 'Wet hands with warm running water', rationale: 'Warm water is more effective at removing oils and debris' },
      { step: 2, action: 'Apply enough soap to cover all hand surfaces', rationale: 'Adequate soap ensures proper lathering for effective cleaning' },
      { step: 3, action: 'Rub hands palm to palm', rationale: 'Creates friction to dislodge microorganisms' },
      { step: 4, action: 'Rub right palm over left dorsum with interlaced fingers and vice versa', rationale: 'Cleans between fingers where microorganisms accumulate' },
      { step: 5, action: 'Rub palm to palm with fingers interlaced', rationale: 'Thoroughly cleans finger surfaces' },
      { step: 6, action: 'Rub backs of fingers to opposing palms with fingers interlocked', rationale: 'Cleans knuckle areas often missed' },
      { step: 7, action: 'Perform rotational rubbing of left thumb clasped in right palm and vice versa', rationale: 'Thumbs are frequently missed during hand hygiene' },
      { step: 8, action: 'Perform rotational rubbing with clasped fingers of right hand in left palm and vice versa', rationale: 'Cleans fingertips which touch surfaces frequently' },
      { step: 9, action: 'Rinse hands thoroughly under running water', rationale: 'Removes soap and loosened microorganisms' },
      { step: 10, action: 'Dry hands thoroughly with single-use towel', rationale: 'Wet hands transfer microorganisms more easily' },
      { step: 11, action: 'Use towel to turn off faucet', rationale: 'Prevents recontamination from faucet handles' },
      { step: 12, action: 'Discard towel in appropriate receptacle', rationale: 'Maintains clean environment' }
    ],
    safetyAlerts: [
      'Do not use hot water as it increases risk of dermatitis',
      'Ensure hands are completely dry before donning gloves',
      'Report any skin breakdown to supervisor'
    ],
    nursingConsiderations: [
      'Model proper hand hygiene for patients and visitors',
      'Educate patients and families about hand hygiene importance',
      'Monitor hand hygiene compliance in clinical area'
    ],
    postProcedureCare: [
      'Apply hand moisturizer if needed to maintain skin integrity',
      'Assess for signs of skin irritation or breakdown'
    ],
    documentation: [
      'Document hand hygiene education provided to patient/family',
      'Report any barriers to compliance'
    ],
    commonErrors: [
      'Insufficient time spent washing (minimum 20 seconds needed)',
      'Missing areas between fingers and thumbs',
      'Not drying hands completely',
      'Using hot water causing skin damage'
    ],
    tips: [
      'Sing "Happy Birthday" twice to ensure 20-second duration',
      'Keep alcohol-based rub at point of care for easy access',
      'Use moisturizer regularly to prevent skin breakdown'
    ],
    references: [
      'World Health Organization. (2009). WHO Guidelines on Hand Hygiene in Health Care.',
      'Centers for Disease Control and Prevention. (2002). Guideline for Hand Hygiene in Health-Care Settings.',
      'The Joint Commission. (2023). Hand Hygiene Standards.'
    ],
    difficulty: 'basic',
    estimatedTime: '40-60 seconds'
  },
  {
    id: 'blood-pressure-measurement',
    title: 'Blood Pressure Measurement',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Blood pressure measurement is the assessment of the force exerted by blood against arterial walls during cardiac contraction (systolic) and relaxation (diastolic). Accurate measurement is essential for detecting hypertension, hypotension, and monitoring cardiovascular status.',
    indications: [
      'Routine vital signs assessment',
      'Cardiovascular assessment',
      'Before and after medication administration',
      'Pre and post-procedure monitoring',
      'Suspected hypertensive or hypotensive episodes'
    ],
    contraindications: [
      'Do not measure on arm with IV line, dialysis access, or lymphedema',
      'Avoid arm on affected side after mastectomy',
      'Do not use on injured or fractured extremity'
    ],
    equipment: [
      'Sphygmomanometer (manual or automatic)',
      'Appropriate size blood pressure cuff',
      'Stethoscope (for manual measurement)',
      'Alcohol swabs for cleaning',
      'Documentation materials'
    ],
    preparation: [
      'Ensure patient has rested for at least 5 minutes',
      'Patient should avoid caffeine, exercise, or smoking 30 minutes prior',
      'Position patient comfortably with arm supported at heart level',
      'Select appropriate cuff size (bladder should encircle 80% of arm)',
      'Expose the arm - remove or roll up sleeve'
    ],
    steps: [
      { step: 1, action: 'Position patient sitting or lying with arm at heart level', rationale: 'Ensures accurate reading; arm below heart level increases reading' },
      { step: 2, action: 'Palpate the brachial artery', rationale: 'Identifies correct placement location for stethoscope' },
      { step: 3, action: 'Apply cuff 2-3 cm above antecubital fossa', rationale: 'Allows room for stethoscope placement without interference' },
      { step: 4, action: 'Ensure cuff is snug but allows 2 fingers underneath', rationale: 'Too loose gives false high reading; too tight causes discomfort' },
      { step: 5, action: 'Palpate radial pulse and inflate cuff until pulse disappears, note reading', rationale: 'Estimates systolic pressure to avoid over-inflation' },
      { step: 6, action: 'Deflate cuff completely and wait 30 seconds', rationale: 'Allows blood to return to normal flow' },
      { step: 7, action: 'Place stethoscope over brachial artery', rationale: 'Best location to hear Korotkoff sounds' },
      { step: 8, action: 'Inflate cuff to 30 mmHg above estimated systolic pressure', rationale: 'Ensures complete occlusion of artery' },
      { step: 9, action: 'Deflate cuff slowly at 2-3 mmHg per second', rationale: 'Allows accurate detection of Korotkoff sounds' },
      { step: 10, action: 'Note systolic pressure at first Korotkoff sound', rationale: 'First sound indicates blood beginning to flow through artery' },
      { step: 11, action: 'Note diastolic pressure when sounds disappear', rationale: 'Disappearance indicates unrestricted blood flow' },
      { step: 12, action: 'Deflate cuff completely and remove', rationale: 'Ensures patient comfort and prevents tissue damage' }
    ],
    safetyAlerts: [
      'Report systolic BP >180 or <90 mmHg immediately',
      'Report diastolic BP >120 or <60 mmHg immediately',
      'Never leave inflated cuff on arm for extended periods'
    ],
    nursingConsiderations: [
      'Use same arm for serial measurements for consistency',
      'Document arm used and patient position',
      'Consider orthostatic measurements if indicated'
    ],
    postProcedureCare: [
      'Inform patient of blood pressure reading',
      'Explain significance if abnormal',
      'Schedule follow-up if needed'
    ],
    documentation: [
      'Record systolic/diastolic pressure (e.g., 120/80 mmHg)',
      'Document arm used (right or left)',
      'Note patient position (sitting, lying, standing)',
      'Record cuff size if non-standard',
      'Document any patient symptoms'
    ],
    commonErrors: [
      'Using incorrect cuff size (most common error)',
      'Patient arm not at heart level',
      'Deflating cuff too quickly',
      'Patient talking during measurement',
      'Taking reading over clothing'
    ],
    tips: [
      'When in doubt about cuff size, use the larger size',
      'If reading seems unusual, remeasure on opposite arm',
      'For obese patients, consider forearm measurement with appropriate cuff',
      'Digital monitors should be validated regularly'
    ],
    references: [
      'American Heart Association. (2020). Blood Pressure Measurement Guidelines.',
      'Whelton, P.K., et al. (2018). ACC/AHA Guideline for Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '3-5 minutes'
  },
  {
    id: 'urinary-catheter-insertion',
    title: 'Urinary Catheter Insertion (Female)',
    category: 'Catheterization',
    categorySlug: 'catheterization',
    description: 'Urinary catheterization is the insertion of a flexible tube into the bladder through the urethra for drainage of urine. This procedure requires strict aseptic technique to prevent catheter-associated urinary tract infections (CAUTI).',
    indications: [
      'Acute urinary retention',
      'Accurate urine output monitoring in critical illness',
      'Perioperative use for surgical procedures',
      'Bladder irrigation or medication instillation',
      'Chronic urinary retention when intermittent catheterization is not feasible'
    ],
    contraindications: [
      'Suspected urethral injury or trauma',
      'Blood at urethral meatus',
      'Suspected pelvic fracture',
      'Recent urological surgery (consult physician)'
    ],
    equipment: [
      'Sterile catheterization kit containing:',
      '- Sterile gloves (2 pairs)',
      '- Sterile drapes (fenestrated and non-fenestrated)',
      '- Antiseptic solution (povidone-iodine or chlorhexidine)',
      '- Cotton balls or swabs',
      '- Sterile lubricant',
      '- Appropriate size Foley catheter (typically 14-16 Fr for adults)',
      '- Prefilled syringe with sterile water (10 mL)',
      '- Urine collection bag',
      '- Specimen container if needed',
      'Adequate lighting',
      'Clean gloves for positioning',
      'Waterproof pad'
    ],
    preparation: [
      'Verify order and indication for catheterization',
      'Perform hand hygiene',
      'Gather all equipment',
      'Explain procedure to patient and obtain consent',
      'Provide privacy',
      'Position patient in dorsal recumbent position with knees flexed',
      'Place waterproof pad under patient',
      'Ensure adequate lighting'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Reduces transmission of microorganisms' },
      { step: 2, action: 'Cleanse perineal area with soap and water if visibly soiled', rationale: 'Removes gross contamination before sterile procedure' },
      { step: 3, action: 'Remove clean gloves and perform hand hygiene', rationale: 'Prepares for sterile technique' },
      { step: 4, action: 'Open catheterization kit using sterile technique', rationale: 'Maintains sterility of supplies' },
      { step: 5, action: 'Don sterile gloves', rationale: 'Maintains surgical asepsis' },
      { step: 6, action: 'Organize sterile field and prepare supplies', rationale: 'Ensures efficient procedure and maintains sterility' },
      { step: 7, action: 'Test balloon by inflating with sterile water, then deflate', rationale: 'Ensures balloon integrity before insertion' },
      { step: 8, action: 'Apply generous sterile lubricant to catheter tip', rationale: 'Facilitates insertion and reduces trauma' },
      { step: 9, action: 'Place sterile drape, exposing only perineal area', rationale: 'Creates sterile field around insertion site' },
      { step: 10, action: 'With non-dominant hand, separate labia to expose urethral meatus', rationale: 'Provides visualization and access' },
      { step: 11, action: 'Maintain separation throughout procedure', rationale: 'Hand becomes contaminated and must not touch sterile equipment' },
      { step: 12, action: 'With dominant hand, cleanse urethral meatus using antiseptic', rationale: 'Reduces microbial count at insertion site' },
      { step: 13, action: 'Use single downward stroke for each swab, front to back', rationale: 'Prevents contamination from anal area' },
      { step: 14, action: 'Pick up catheter with dominant hand, keeping end in collection container', rationale: 'Maintains sterility and prevents contamination' },
      { step: 15, action: 'Insert catheter gently 5-7.5 cm until urine flows', rationale: 'Female urethra is approximately 4 cm; extra insertion ensures bladder entry' },
      { step: 16, action: 'Advance catheter additional 2.5-5 cm after urine appears', rationale: 'Ensures catheter tip is fully in bladder before balloon inflation' },
      { step: 17, action: 'Inflate balloon with entire contents of prefilled syringe', rationale: 'Anchors catheter in bladder' },
      { step: 18, action: 'Gently pull catheter until resistance is felt', rationale: 'Confirms balloon is against bladder neck' },
      { step: 19, action: 'Connect catheter to drainage bag if not already attached', rationale: 'Establishes closed drainage system' },
      { step: 20, action: 'Secure catheter to inner thigh with securement device', rationale: 'Prevents traction and urethral trauma' },
      { step: 21, action: 'Position drainage bag below bladder level', rationale: 'Promotes drainage by gravity and prevents reflux' }
    ],
    safetyAlerts: [
      'STOP if resistance is met - do not force catheter',
      'Never inflate balloon until urine is flowing',
      'If blood appears or patient reports severe pain, stop and notify physician',
      'Use smallest catheter size appropriate for patient',
      'Remove catheter as soon as no longer indicated to prevent CAUTI'
    ],
    nursingConsiderations: [
      'Review CAUTI prevention bundle compliance',
      'Assess for catheter necessity daily',
      'Maintain closed drainage system',
      'Keep drainage bag below bladder level at all times',
      'Perform regular perineal hygiene'
    ],
    postProcedureCare: [
      'Document initial urine output amount and characteristics',
      'Monitor for signs of infection',
      'Ensure patient comfort',
      'Provide catheter care education',
      'Monitor intake and output'
    ],
    documentation: [
      'Date and time of insertion',
      'Catheter type and size',
      'Balloon inflation volume',
      'Patient tolerance of procedure',
      'Initial urine output and characteristics',
      'Specimen collected if applicable',
      'Securement method used'
    ],
    commonErrors: [
      'Inflating balloon before urine is visualized',
      'Using catheter larger than necessary',
      'Contaminating sterile field',
      'Inadequate lubrication',
      'Not advancing catheter far enough before balloon inflation',
      'Placing drainage bag above bladder level'
    ],
    tips: [
      'If having difficulty visualizing meatus, have assistant hold light',
      'For difficult anatomy, consider using a curved-tip catheter',
      'Warm lubricant slightly for patient comfort',
      'Ask patient to bear down gently to help relax sphincter',
      'If catheter will not advance, do not force - consult physician'
    ],
    references: [
      'Craven, R.F., & Hirnle, C.J. (2023). Fundamentals of Nursing, 9th ed.',
      'Centers for Disease Control and Prevention. (2019). Guideline for the Prevention of Surgical Site Infection.',
      'Association of periOperative Registered Nurses. (2023). Guidelines for Perioperative Practice.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'temperature-measurement',
    title: 'Temperature Measurement',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Temperature measurement is the assessment of body heat balance, reflecting the difference between heat produced and heat lost. Accurate measurement helps detect fever, hypothermia, and monitor patient condition.',
    indications: [
      'Routine vital signs assessment',
      'Suspected infection or sepsis',
      'Post-operative monitoring',
      'Environmental exposure (heat/cold)',
      'Medication therapy monitoring'
    ],
    contraindications: [
      'Oral: Patients who are unconscious, confused, or have oral surgery',
      'Rectal: Neutropenic patients, rectal surgery, diarrhea',
      'Axillary: Not recommended for critical temperature monitoring'
    ],
    equipment: [
      'Thermometer (digital, tympanic, or temporal)',
      'Probe covers (single-use)',
      'Alcohol swabs',
      'Gloves (for rectal measurement)',
      'Lubricant (for rectal measurement)',
      'Documentation materials'
    ],
    preparation: [
      'Verify patient identity',
      'Assess appropriate route for measurement',
      'Ensure patient has not had hot/cold drinks (oral) in past 15 minutes',
      'Explain procedure to patient',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene', rationale: 'Prevents transmission of microorganisms' },
      { step: 2, action: 'Select appropriate thermometer and measurement site', rationale: 'Different sites have varying accuracy and indications' },
      { step: 3, action: 'Apply probe cover to thermometer', rationale: 'Prevents cross-contamination between patients' },
      { step: 4, action: 'For oral: Place under tongue in posterior sublingual pocket', rationale: 'Closest proximity to sublingual artery for accurate reading' },
      { step: 5, action: 'For tympanic: Gently pull pinna up and back (adult), insert probe', rationale: 'Straightens ear canal for accurate reading of tympanic membrane' },
      { step: 6, action: 'For temporal: Swipe across forehead from midline to temple', rationale: 'Measures heat from temporal artery blood flow' },
      { step: 7, action: 'Wait for audible signal indicating measurement complete', rationale: 'Ensures accurate reading is obtained' },
      { step: 8, action: 'Read and note temperature value', rationale: 'Accurate documentation requires immediate recording' },
      { step: 9, action: 'Remove and dispose of probe cover', rationale: 'Prevents contamination of thermometer' },
      { step: 10, action: 'Clean thermometer according to facility policy', rationale: 'Maintains equipment and prevents infection' }
    ],
    safetyAlerts: [
      'Report temperature >38.3°C (101°F) or <35°C (95°F) immediately',
      'Never use glass mercury thermometers - mercury is toxic',
      'Ensure correct technique to avoid inaccurate readings'
    ],
    nursingConsiderations: [
      'Consider patient factors affecting temperature (age, time of day, activity)',
      'Use consistent route for serial measurements',
      'Account for environmental factors'
    ],
    postProcedureCare: [
      'Inform patient of temperature reading',
      'Implement fever or hypothermia protocols if indicated',
      'Provide comfort measures as needed'
    ],
    documentation: [
      'Record temperature value with route used',
      'Note time of measurement',
      'Document any interventions for abnormal values'
    ],
    commonErrors: [
      'Taking oral temperature after hot/cold intake',
      'Incorrect thermometer placement',
      'Not waiting for complete reading',
      'Using inappropriate route for patient condition'
    ],
    tips: [
      'Tympanic is fastest and well-tolerated',
      'Oral is most common for alert, cooperative adults',
      'Temporal artery is good for pediatric patients',
      'Wait 15-30 minutes after hot/cold drinks for oral temp'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Sund-Levander, M., et al. (2002). Normal oral, rectal, tympanic and axillary body temperature in adult men and women. Scandinavian Journal of Caring Sciences.',
      'American Association of Critical-Care Nurses. (2023). Temperature Measurement Guidelines.'
    ],
    difficulty: 'basic',
    estimatedTime: '2-3 minutes'
  },
  {
    id: 'pulse-measurement',
    title: 'Pulse Assessment',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Pulse assessment involves palpating arterial pulsations to evaluate heart rate, rhythm, and quality. It provides essential information about cardiovascular function and peripheral perfusion.',
    indications: [
      'Routine vital signs assessment',
      'Cardiovascular status evaluation',
      'Before medication administration (digoxin, beta-blockers)',
      'Assessment of peripheral circulation',
      'Post-procedure monitoring'
    ],
    contraindications: [
      'Do not palpate carotid arteries simultaneously (risk of decreased cerebral blood flow)',
      'Avoid excessive pressure over carotid in patients with atherosclerosis'
    ],
    equipment: [
      'Watch with second hand or digital timer',
      'Stethoscope (for apical pulse)',
      'Documentation materials'
    ],
    preparation: [
      'Ensure patient has been at rest for 5 minutes',
      'Position patient comfortably',
      'Explain procedure',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene', rationale: 'Prevents transmission of microorganisms' },
      { step: 2, action: 'Position patient with arm relaxed at side or across chest', rationale: 'Allows easy access and reduces muscle tension' },
      { step: 3, action: 'Locate radial pulse on thumb side of wrist', rationale: 'Radial artery is easily accessible and commonly used' },
      { step: 4, action: 'Place index and middle fingers over artery', rationale: 'These fingers are most sensitive to pulsation' },
      { step: 5, action: 'Apply moderate pressure until pulse is felt', rationale: 'Too light may miss pulse; too heavy may occlude artery' },
      { step: 6, action: 'Count beats for 30 seconds, multiply by 2', rationale: 'Provides accurate rate for regular rhythms' },
      { step: 7, action: 'If irregular, count for full 60 seconds', rationale: 'Ensures accuracy when rhythm varies' },
      { step: 8, action: 'Assess pulse quality (bounding, weak, thready)', rationale: 'Indicates cardiac output and vascular status' },
      { step: 9, action: 'Note rhythm (regular or irregular)', rationale: 'Irregular rhythms may indicate arrhythmia' },
      { step: 10, action: 'Document findings', rationale: 'Accurate recording enables trend monitoring' }
    ],
    safetyAlerts: [
      'Report pulse <50 or >120 bpm in adults',
      'Report irregular rhythms not previously documented',
      'Assess apical pulse if radial pulse is irregular or weak'
    ],
    nursingConsiderations: [
      'Compare bilateral pulses for symmetry',
      'Note any pulse deficit (difference between apical and radial)',
      'Consider patient factors affecting rate (anxiety, medications, activity)'
    ],
    postProcedureCare: [
      'Inform patient of pulse rate',
      'Report abnormalities to physician',
      'Implement interventions for abnormal findings'
    ],
    documentation: [
      'Record rate (beats per minute)',
      'Document rhythm (regular/irregular)',
      'Note quality (bounding/normal/weak/thready)',
      'Record site used for measurement'
    ],
    commonErrors: [
      'Using thumb (has its own pulse)',
      'Counting for too short a time with irregular rhythm',
      'Applying too much pressure',
      'Not noting rhythm and quality'
    ],
    tips: [
      'Practice locating pulses on yourself first',
      'Use apical pulse for cardiac medications',
      'Check pedal pulses to assess peripheral circulation',
      'Doppler may be needed for weak pulses'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'American Heart Association. (2020). Guidelines for CPR and Emergency Cardiovascular Care.',
      'Lewis, S.L., et al. (2023). Medical-Surgical Nursing, 12th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '1-2 minutes'
  },
  {
    id: 'respiratory-rate-measurement',
    title: 'Respiratory Rate Assessment',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Respiratory rate assessment involves counting the number of breaths per minute and evaluating depth, rhythm, and effort. It is a vital indicator of respiratory function and overall patient condition.',
    indications: [
      'Routine vital signs assessment',
      'Respiratory distress evaluation',
      'Post-anesthesia monitoring',
      'Medication therapy monitoring (opioids, sedatives)',
      'Chronic respiratory disease management'
    ],
    contraindications: [
      'None - respiratory rate should always be assessed'
    ],
    equipment: [
      'Watch with second hand or digital timer',
      'Pulse oximeter (optional)',
      'Documentation materials'
    ],
    preparation: [
      'Do not inform patient you are counting respirations',
      'Keep hand on pulse site to disguise assessment',
      'Observe chest or abdomen movement'
    ],
    steps: [
      { step: 1, action: 'Keep fingers on radial pulse after pulse assessment', rationale: 'Patient awareness of observation may alter breathing pattern' },
      { step: 2, action: 'Observe rise and fall of chest or abdomen', rationale: 'One rise and fall equals one respiration' },
      { step: 3, action: 'Count respirations for 30 seconds, multiply by 2', rationale: 'Provides accurate rate for regular breathing' },
      { step: 4, action: 'If irregular, count for full 60 seconds', rationale: 'Ensures accuracy with variable patterns' },
      { step: 5, action: 'Observe depth of respirations (shallow, normal, deep)', rationale: 'Indicates tidal volume and effort' },
      { step: 6, action: 'Note rhythm (regular or irregular)', rationale: 'Patterns may indicate specific conditions' },
      { step: 7, action: 'Assess effort and use of accessory muscles', rationale: 'Indicates respiratory distress' },
      { step: 8, action: 'Listen for audible sounds (wheezing, stridor)', rationale: 'May indicate airway obstruction' },
      { step: 9, action: 'Note skin color (pallor, cyanosis)', rationale: 'Indicates oxygenation status' },
      { step: 10, action: 'Document findings', rationale: 'Enables trend monitoring and communication' }
    ],
    safetyAlerts: [
      'Report respiratory rate <10 or >24 breaths/minute in adults',
      'Report signs of respiratory distress immediately',
      'Notify physician of new onset abnormal breathing patterns'
    ],
    nursingConsiderations: [
      'Assess oxygen saturation with respiratory rate',
      'Note patient position during assessment',
      'Consider patient factors affecting rate'
    ],
    postProcedureCare: [
      'Position patient for optimal breathing',
      'Administer oxygen if ordered',
      'Report abnormalities to healthcare team'
    ],
    documentation: [
      'Record rate (breaths per minute)',
      'Document depth and rhythm',
      'Note any abnormal sounds or distress',
      'Record oxygen saturation if measured'
    ],
    commonErrors: [
      'Telling patient you are counting respirations',
      'Counting for too short a time',
      'Not noting depth, rhythm, and effort',
      'Missing signs of distress'
    ],
    tips: [
      'Count respirations immediately after pulse to avoid patient awareness',
      'Note breathing patterns: Cheyne-Stokes, Kussmaul, Biot',
      'Normal adult rate is 12-20 breaths/minute',
      'Document time if rate varies significantly'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Cretikos, M.A., et al. (2008). Respiratory rate: the neglected vital sign. Medical Journal of Australia.',
      'American Association of Critical-Care Nurses. (2023). Respiratory Assessment Guidelines.'
    ],
    difficulty: 'basic',
    estimatedTime: '1-2 minutes'
  },
  {
    id: 'intramuscular-injection',
    title: 'Intramuscular Injection',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Intramuscular (IM) injection involves depositing medication into muscle tissue for absorption. This route is used for medications that require rapid absorption and for depot preparations that release slowly.',
    indications: [
      'Medications requiring rapid absorption',
      'Vaccines and immunizations',
      'Medications irritating to subcutaneous tissue',
      'Depot or slow-release preparations',
      'When oral route is contraindicated'
    ],
    contraindications: [
      'Coagulation disorders (relative)',
      'Muscle atrophy at injection site',
      'Active infection at injection site',
      'Patient on anticoagulation therapy (use caution)'
    ],
    equipment: [
      'Medication ordered',
      'Appropriate syringe (1-3 mL typically)',
      'Needle: 21-23 gauge, 1-1.5 inch for adults',
      'Alcohol swabs',
      'Non-sterile gloves',
      'Adhesive bandage',
      'Sharps container'
    ],
    preparation: [
      'Verify medication order (right patient, drug, dose, route, time)',
      'Check for allergies',
      'Review medication information',
      'Calculate correct dose',
      'Draw up medication using aseptic technique',
      'Perform hand hygiene',
      'Explain procedure to patient'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity using two identifiers', rationale: 'Prevents medication errors' },
      { step: 2, action: 'Perform hand hygiene and don gloves', rationale: 'Reduces infection risk' },
      { step: 3, action: 'Select appropriate injection site', rationale: 'Ventrogluteal preferred for adults; deltoid for vaccines' },
      { step: 4, action: 'Position patient to relax target muscle', rationale: 'Reduces discomfort and facilitates absorption' },
      { step: 5, action: 'Locate anatomical landmarks', rationale: 'Ensures injection into correct muscle and avoids nerves/vessels' },
      { step: 6, action: 'Cleanse site with alcohol swab in circular motion', rationale: 'Reduces microorganisms at injection site' },
      { step: 7, action: 'Allow alcohol to dry', rationale: 'Prevents stinging and allows antiseptic action' },
      { step: 8, action: 'Spread skin taut (or use Z-track for irritating medications)', rationale: 'Facilitates needle insertion and seals medication in muscle' },
      { step: 9, action: 'Insert needle at 90-degree angle with quick, firm motion', rationale: 'Ensures medication enters muscle tissue' },
      { step: 10, action: 'Aspirate for blood (if facility policy requires)', rationale: 'CDC no longer requires; check facility policy' },
      { step: 11, action: 'Inject medication slowly and steadily', rationale: 'Reduces tissue trauma and pain' },
      { step: 12, action: 'Wait 10 seconds before withdrawing needle', rationale: 'Allows medication to disperse in tissue' },
      { step: 13, action: 'Withdraw needle quickly at same angle', rationale: 'Minimizes tissue damage' },
      { step: 14, action: 'Apply gentle pressure with gauze', rationale: 'Controls bleeding; do not massage unless indicated' },
      { step: 15, action: 'Apply adhesive bandage', rationale: 'Protects injection site' },
      { step: 16, action: 'Dispose of needle in sharps container immediately', rationale: 'Prevents needlestick injuries' }
    ],
    safetyAlerts: [
      'Never recap needles',
      'Maximum IM volume: 3 mL in large muscle, 1 mL in deltoid',
      'Monitor for signs of allergic reaction for 15-30 minutes after injection',
      'Do not inject into areas with skin abnormalities or inflammation'
    ],
    nursingConsiderations: [
      'Rotate injection sites if giving multiple injections',
      'Use smallest gauge needle appropriate for medication viscosity',
      'Consider patient age and muscle mass when selecting site and needle length',
      'Distraction techniques may reduce anxiety'
    ],
    postProcedureCare: [
      'Monitor for adverse reactions',
      'Educate patient on expected effects and when to report problems',
      'Document injection site and any reactions'
    ],
    documentation: [
      'Medication name, dose, and route',
      'Injection site used',
      'Time of administration',
      'Patient response and any reactions',
      'Lot number for vaccines'
    ],
    commonErrors: [
      'Wrong site selection',
      'Incorrect needle length for patient body habitus',
      'Injecting too quickly',
      'Not allowing alcohol to dry',
      'Recapping needles'
    ],
    tips: [
      'Ventrogluteal site has no major nerves or vessels',
      'For anxious patients, have them take deep breath during insertion',
      'Ice applied before injection may reduce pain',
      'Position to promote muscle relaxation (prone or side-lying for gluteal)'
    ],
    references: [
      'CDC. (2023). Vaccine Administration Guidelines.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Nicoll, L.H., & Hesby, A. (2002). Intramuscular injection: An integrative research review. Applied Nursing Research.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '5-10 minutes'
  },
  {
    id: 'subcutaneous-injection',
    title: 'Subcutaneous Injection',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Subcutaneous injection involves injecting medication into the fatty tissue layer beneath the skin. This route provides slow, sustained absorption and is commonly used for insulin, heparin, and vaccines.',
    indications: [
      'Insulin administration',
      'Anticoagulants (heparin, enoxaparin)',
      'Certain vaccines',
      'Medications requiring slow, sustained absorption',
      'Self-administration medications'
    ],
    contraindications: [
      'Areas with scarring, bruising, or inflammation',
      'Edematous areas',
      'Moles, birthmarks, or skin abnormalities',
      'Areas with poor circulation'
    ],
    equipment: [
      'Medication ordered',
      'Insulin syringe or appropriate syringe',
      'Needle: 25-30 gauge, 3/8 to 5/8 inch',
      'Alcohol swabs',
      'Non-sterile gloves',
      'Sharps container'
    ],
    preparation: [
      'Verify medication order',
      'Check allergies',
      'Calculate correct dose',
      'Draw up medication using aseptic technique',
      'Perform hand hygiene',
      'Explain procedure to patient'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity using two identifiers', rationale: 'Prevents medication errors' },
      { step: 2, action: 'Perform hand hygiene and don gloves', rationale: 'Reduces infection risk' },
      { step: 3, action: 'Select injection site (abdomen, thigh, upper arm)', rationale: 'These areas have adequate subcutaneous tissue' },
      { step: 4, action: 'Cleanse site with alcohol in circular motion', rationale: 'Reduces microorganisms' },
      { step: 5, action: 'Allow alcohol to dry', rationale: 'Prevents stinging during injection' },
      { step: 6, action: 'Pinch up 1-2 inches of tissue', rationale: 'Lifts subcutaneous tissue away from muscle' },
      { step: 7, action: 'Insert needle at 45-90 degree angle', rationale: '90° for adequate tissue; 45° for thin patients' },
      { step: 8, action: 'Release pinched tissue', rationale: 'Prevents injection into compressed tissue' },
      { step: 9, action: 'Inject medication slowly', rationale: 'Reduces discomfort and allows absorption' },
      { step: 10, action: 'Withdraw needle at same angle', rationale: 'Minimizes tissue damage' },
      { step: 11, action: 'Apply gentle pressure (do not massage)', rationale: 'Prevents bruising; massage may alter absorption' },
      { step: 12, action: 'Dispose of needle in sharps container', rationale: 'Prevents needlestick injuries' }
    ],
    safetyAlerts: [
      'Never massage site after heparin or insulin injection',
      'Rotate injection sites systematically',
      'Maximum volume: 0.5-1 mL per site',
      'Do not aspirate for subcutaneous injections'
    ],
    nursingConsiderations: [
      'Use rotation chart for patients requiring frequent injections',
      'Teach self-injection technique to appropriate patients',
      'Space injections at least 1 inch from previous sites'
    ],
    postProcedureCare: [
      'Monitor for signs of reaction',
      'Educate patient on site rotation',
      'Document administration and site'
    ],
    documentation: [
      'Medication, dose, and route',
      'Injection site',
      'Time of administration',
      'Patient response'
    ],
    commonErrors: [
      'Injecting into muscle instead of subcutaneous tissue',
      'Not rotating sites',
      'Massaging injection site (especially with heparin)',
      'Using incorrect angle for patient body type'
    ],
    tips: [
      'Abdomen has fastest absorption for insulin',
      'Create rotation chart for patients',
      'Let refrigerated medication warm slightly before injection',
      'Use shorter needle for thin patients'
    ],
    references: [
      'American Diabetes Association. (2023). Standards of Medical Care in Diabetes.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Institute for Safe Medication Practices. (2023). Safe Practice Guidelines for Adult IV Push Medications.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '5-7 minutes'
  },
  {
    id: 'oral-medication-administration',
    title: 'Oral Medication Administration',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Oral medication administration involves giving medications by mouth for absorption through the gastrointestinal tract. It is the safest, most convenient, and most economical route of medication delivery.',
    indications: [
      'Patient able to swallow',
      'Functional gastrointestinal tract',
      'Medication available in oral form',
      'No contraindication to oral intake'
    ],
    contraindications: [
      'NPO status',
      'Nausea and vomiting',
      'Difficulty swallowing (dysphagia)',
      'Unconscious patient',
      'GI obstruction or ileus'
    ],
    equipment: [
      'Medication ordered',
      'Medication cup',
      'Water or appropriate liquid',
      'Straw if needed',
      'Pill crusher if needed and appropriate',
      'Medication administration record'
    ],
    preparation: [
      'Review medication order',
      'Check for allergies',
      'Check for drug interactions',
      'Verify patient ability to swallow',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Verify medication order against MAR', rationale: 'Ensures right medication is given' },
      { step: 2, action: 'Perform hand hygiene', rationale: 'Prevents contamination' },
      { step: 3, action: 'Prepare medications at designated area', rationale: 'Reduces distractions and errors' },
      { step: 4, action: 'Check medication against order three times', rationale: 'The three checks prevent errors' },
      { step: 5, action: 'Verify patient identity using two identifiers', rationale: 'Ensures right patient' },
      { step: 6, action: 'Explain medication purpose and side effects', rationale: 'Promotes patient education and compliance' },
      { step: 7, action: 'Assist patient to sitting or upright position', rationale: 'Prevents aspiration and facilitates swallowing' },
      { step: 8, action: 'Give tablet or capsule with water', rationale: 'Water aids swallowing and absorption' },
      { step: 9, action: 'Observe patient swallow medication', rationale: 'Ensures medication is actually taken' },
      { step: 10, action: 'Document administration', rationale: 'Legal record and prevents double-dosing' }
    ],
    safetyAlerts: [
      'Never crush enteric-coated or extended-release medications',
      'Check for food-drug interactions',
      'Hold medication and notify physician if patient cannot swallow',
      'Verify patient can safely take oral medications'
    ],
    nursingConsiderations: [
      'Check if medications should be taken with or without food',
      'Space medications appropriately for absorption',
      'Consider alternative forms (liquid, dissolvable) for dysphagia'
    ],
    postProcedureCare: [
      'Monitor for drug effects and side effects',
      'Ensure patient remains upright for 30 minutes if aspiration risk',
      'Document any adverse reactions'
    ],
    documentation: [
      'Medication name, dose, and route',
      'Time administered',
      'Patient response',
      'Any medications held and reason'
    ],
    commonErrors: [
      'Not verifying patient identity',
      'Crushing medications that should not be crushed',
      'Not checking for allergies',
      'Leaving medications at bedside'
    ],
    tips: [
      'Always stay with patient until medication is swallowed',
      'Use teach-back to ensure patient understanding',
      'Report any difficulty swallowing to healthcare team',
      'Consider timing with meals as appropriate'
    ],
    references: [
      'Institute for Safe Medication Practices. (2023). ISMP Medication Safety Alert.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'The Joint Commission. (2023). Medication Management Standards.'
    ],
    difficulty: 'basic',
    estimatedTime: '5-10 minutes'
  },
  {
    id: 'peripheral-iv-insertion',
    title: 'Peripheral IV Catheter Insertion',
    category: 'IV Therapy',
    categorySlug: 'iv-therapy',
    description: 'Peripheral intravenous catheter insertion involves placing a catheter into a peripheral vein to establish vascular access for fluid, medication, or blood product administration.',
    indications: [
      'Fluid therapy',
      'IV medication administration',
      'Blood transfusion',
      'Parenteral nutrition',
      'Emergency vascular access'
    ],
    contraindications: [
      'Infection at insertion site',
      'Phlebitis or thrombosis',
      'AV fistula or shunt in arm',
      'Lymphedema in extremity',
      'Mastectomy side (relative)'
    ],
    equipment: [
      'IV catheter (appropriate gauge: 18-24G typically)',
      'Tourniquet',
      'Antiseptic solution (chlorhexidine preferred)',
      'Transparent dressing',
      'Extension tubing',
      'Saline flush',
      'Tape',
      'Non-sterile gloves',
      'Sharps container',
      'IV start kit'
    ],
    preparation: [
      'Verify order for IV therapy',
      'Assess patient for allergies (latex, chlorhexidine, iodine)',
      'Select appropriate site (non-dominant arm, distal to proximal)',
      'Explain procedure to patient',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Apply tourniquet 4-6 inches above intended site', rationale: 'Distends veins for easier access' },
      { step: 3, action: 'Select vein by palpation', rationale: 'Vein should feel spongy and bouncy' },
      { step: 4, action: 'Release tourniquet while preparing equipment', rationale: 'Prevents prolonged venous occlusion' },
      { step: 5, action: 'Cleanse site with antiseptic for 30 seconds, let dry', rationale: 'Reduces microorganisms; must dry for full effect' },
      { step: 6, action: 'Reapply tourniquet', rationale: 'Distends vein for cannulation' },
      { step: 7, action: 'Anchor vein by stretching skin below insertion site', rationale: 'Stabilizes vein and prevents rolling' },
      { step: 8, action: 'Insert catheter at 10-30 degree angle, bevel up', rationale: 'Shallow angle for superficial veins' },
      { step: 9, action: 'Observe for blood flashback in chamber', rationale: 'Confirms entry into vein' },
      { step: 10, action: 'Lower angle and advance slightly, then advance catheter only', rationale: 'Ensures catheter tip is in vein' },
      { step: 11, action: 'Release tourniquet', rationale: 'Restores blood flow' },
      { step: 12, action: 'Apply pressure above catheter tip, remove stylet', rationale: 'Prevents blood leakage' },
      { step: 13, action: 'Connect extension tubing or saline lock', rationale: 'Establishes closed system' },
      { step: 14, action: 'Flush with saline, observe for infiltration', rationale: 'Confirms patency and proper placement' },
      { step: 15, action: 'Apply transparent dressing', rationale: 'Secures catheter and allows site visualization' },
      { step: 16, action: 'Document date/time on dressing', rationale: 'Tracks dwell time for replacement' }
    ],
    safetyAlerts: [
      'Dispose of needle immediately in sharps container',
      'Never reuse catheters or attempt insertion more than twice',
      'Change peripheral IV sites every 72-96 hours per policy',
      'Monitor for signs of phlebitis, infiltration, or infection'
    ],
    nursingConsiderations: [
      'Use smallest gauge appropriate for therapy',
      'Avoid areas of flexion if possible',
      'Use vein finder or ultrasound for difficult access',
      'Warm site before insertion to dilate veins'
    ],
    postProcedureCare: [
      'Assess site regularly for complications',
      'Flush before and after medication administration',
      'Document condition of site each shift'
    ],
    documentation: [
      'Date, time, and site of insertion',
      'Catheter gauge and length',
      'Number of attempts',
      'Nurse initials',
      'Patient tolerance'
    ],
    commonErrors: [
      'Through-and-through puncture of vein',
      'Not anchoring vein properly',
      'Inserting at too steep an angle',
      'Not allowing antiseptic to dry'
    ],
    tips: [
      'Have patient make fist and pump to enhance vein visibility',
      'Use warm compresses to dilate veins',
      'Start distally and work proximally',
      'Palpate, do not just look - best veins may not be visible'
    ],
    references: [
      'Infusion Nurses Society. (2021). Infusion Therapy Standards of Practice.',
      'CDC. (2023). Guidelines for Prevention of Intravascular Catheter-Related Infections.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'iv-fluid-administration',
    title: 'IV Fluid Administration',
    category: 'IV Therapy',
    categorySlug: 'iv-therapy',
    description: 'Intravenous fluid administration involves the delivery of fluids directly into the bloodstream to maintain hydration, replace fluid losses, or deliver medications and electrolytes.',
    indications: [
      'Dehydration',
      'Inability to take oral fluids',
      'Electrolyte imbalances',
      'Medication delivery',
      'Blood volume replacement'
    ],
    contraindications: [
      'Heart failure (use caution)',
      'Renal failure (use caution)',
      'Fluid overload',
      'Specific contraindications based on fluid type'
    ],
    equipment: [
      'Prescribed IV solution',
      'IV tubing (primary or secondary)',
      'IV pole',
      'Infusion pump (if required)',
      'Time tape (for gravity infusion)',
      'Alcohol swabs',
      'Gloves'
    ],
    preparation: [
      'Verify order for type, amount, and rate of infusion',
      'Check solution for expiration, clarity, and integrity',
      'Calculate drip rate if using gravity',
      'Perform hand hygiene',
      'Explain procedure to patient'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity and IV order', rationale: 'Prevents errors' },
      { step: 2, action: 'Inspect IV solution bag for clarity and expiration', rationale: 'Ensures solution safety' },
      { step: 3, action: 'Attach IV tubing using aseptic technique', rationale: 'Prevents contamination' },
      { step: 4, action: 'Close roller clamp on tubing', rationale: 'Prevents air in line' },
      { step: 5, action: 'Spike IV bag and hang on IV pole', rationale: 'Establishes fluid source' },
      { step: 6, action: 'Squeeze drip chamber until half full', rationale: 'Allows visualization of drops and prevents air entry' },
      { step: 7, action: 'Open clamp and prime tubing, removing all air', rationale: 'Air in tubing can cause air embolism' },
      { step: 8, action: 'Close clamp when tubing is primed', rationale: 'Prevents fluid loss' },
      { step: 9, action: 'Clean IV port on patient catheter with alcohol', rationale: 'Reduces infection risk' },
      { step: 10, action: 'Connect tubing to patient IV catheter', rationale: 'Establishes infusion' },
      { step: 11, action: 'Set infusion rate on pump or adjust roller clamp', rationale: 'Delivers prescribed rate' },
      { step: 12, action: 'Label tubing with date and time', rationale: 'Tracks for replacement schedule' },
      { step: 13, action: 'Monitor site and patient response', rationale: 'Detects complications early' }
    ],
    safetyAlerts: [
      'Always verify IV solution with medication order',
      'Monitor for signs of fluid overload (dyspnea, edema, crackles)',
      'Check IV site for infiltration or phlebitis',
      'Never speed up IV to catch up if behind schedule'
    ],
    nursingConsiderations: [
      'Calculate and monitor intake and output',
      'Assess vital signs per policy',
      'Monitor laboratory values (electrolytes)',
      'Educate patient on signs of complications'
    ],
    postProcedureCare: [
      'Document solution, rate, and patient response',
      'Monitor ongoing infusion',
      'Report any adverse reactions'
    ],
    documentation: [
      'Solution type and volume',
      'Rate of infusion',
      'Time started',
      'IV site condition',
      'Patient tolerance'
    ],
    commonErrors: [
      'Incorrect rate calculation',
      'Not removing all air from tubing',
      'Not monitoring site regularly',
      'Speeding up rate to catch up'
    ],
    tips: [
      'Use infusion pump for high-risk medications',
      'Time tape helps track gravity infusions',
      'Check site every 1-2 hours',
      'Know your facility drop factor for gravity calculation'
    ],
    references: [
      'Infusion Nurses Society. (2021). Infusion Therapy Standards of Practice.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Phillips, L.D., & Gorski, L.A. (2014). Manual of IV Therapeutics, 6th ed.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'simple-wound-dressing',
    title: 'Simple Wound Dressing Change',
    category: 'Wound Care',
    categorySlug: 'wound-care',
    description: 'A simple wound dressing change involves removing the old dressing, cleaning the wound, assessing healing progress, and applying a new sterile dressing to promote wound healing and prevent infection.',
    indications: [
      'Surgical incisions',
      'Traumatic wounds',
      'Skin tears',
      'Minor burns',
      'Wound assessment and care'
    ],
    contraindications: [
      'Allergies to dressing materials',
      'Consider sterile technique for deep or complex wounds'
    ],
    equipment: [
      'Sterile dressing supplies',
      'Sterile gloves',
      'Clean gloves',
      'Normal saline or prescribed cleanser',
      'Sterile gauze',
      'Tape or transparent dressing',
      'Waterproof pad',
      'Waste bag'
    ],
    preparation: [
      'Review order and wound care plan',
      'Assess patient pain level and medicate if needed',
      'Gather all supplies',
      'Explain procedure to patient',
      'Position patient for comfort and access',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Prevents contamination' },
      { step: 2, action: 'Place waterproof pad under wound area', rationale: 'Protects bedding from drainage' },
      { step: 3, action: 'Carefully remove old dressing', rationale: 'Minimizes trauma to healing tissue' },
      { step: 4, action: 'Assess old dressing for drainage amount, color, odor', rationale: 'Provides information about healing' },
      { step: 5, action: 'Dispose of soiled dressing and gloves', rationale: 'Prevents cross-contamination' },
      { step: 6, action: 'Perform hand hygiene and don sterile gloves', rationale: 'Maintains sterile technique' },
      { step: 7, action: 'Assess wound (size, color, drainage, edges)', rationale: 'Documents healing progress' },
      { step: 8, action: 'Clean wound from center outward with prescribed solution', rationale: 'Removes debris; outward motion prevents contamination' },
      { step: 9, action: 'Pat dry with sterile gauze', rationale: 'Moisture can promote bacterial growth' },
      { step: 10, action: 'Apply appropriate dressing per wound care plan', rationale: 'Protects wound and promotes healing' },
      { step: 11, action: 'Secure dressing with tape', rationale: 'Keeps dressing in place' },
      { step: 12, action: 'Remove gloves and perform hand hygiene', rationale: 'Prevents transmission of organisms' }
    ],
    safetyAlerts: [
      'Report signs of infection: increased redness, warmth, purulent drainage, fever',
      'Document changes in wound appearance',
      'Use strict sterile technique for deep or chronic wounds',
      'Never force dressing off if stuck to wound'
    ],
    nursingConsiderations: [
      'Time dressing changes with pain medication peak effect',
      'Use normal saline to moisten adherent dressings',
      'Assess patient understanding of wound care',
      'Consider wound culture if infection suspected'
    ],
    postProcedureCare: [
      'Dispose of supplies properly',
      'Position patient comfortably',
      'Educate patient on signs of infection',
      'Document wound assessment and care'
    ],
    documentation: [
      'Wound location, size (length x width x depth)',
      'Wound bed appearance (color, tissue type)',
      'Drainage amount, color, odor',
      'Periwound condition',
      'Dressing applied',
      'Patient tolerance'
    ],
    commonErrors: [
      'Breaking sterile technique',
      'Not assessing wound before covering',
      'Using inappropriate cleaning technique',
      'Not documenting wound measurements'
    ],
    tips: [
      'Take photo if facility policy allows for comparison',
      'Use consistent measurement technique',
      'Consider specialized dressings based on wound type',
      'Involve wound care specialist for complex wounds'
    ],
    references: [
      'Wound, Ostomy and Continence Nurses Society. (2023). Guidelines for Prevention and Management of Pressure Injuries.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'National Pressure Ulcer Advisory Panel. (2019). Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'nasogastric-tube-insertion',
    title: 'Nasogastric Tube Insertion',
    category: 'Nasogastric Procedures',
    categorySlug: 'nasogastric',
    description: 'Nasogastric tube insertion involves placing a flexible tube through the nose, down the esophagus, and into the stomach for decompression, feeding, or medication administration.',
    indications: [
      'Gastric decompression',
      'Enteral feeding',
      'Medication administration',
      'Gastric lavage',
      'Bowel obstruction'
    ],
    contraindications: [
      'Severe facial trauma or basilar skull fracture',
      'Esophageal stricture or varices',
      'Recent nasal surgery',
      'Coagulation disorders (relative)'
    ],
    equipment: [
      'Appropriate size NG tube (14-18 Fr for adults)',
      'Water-soluble lubricant',
      'Cup of water with straw',
      '60 mL syringe',
      'pH strips',
      'Stethoscope',
      'Tape or commercial tube holder',
      'Emesis basin',
      'Tissues',
      'Penlight',
      'Non-sterile gloves',
      'Suction equipment if for decompression'
    ],
    preparation: [
      'Verify order for NG tube insertion',
      'Assess nasal patency (ask patient to sniff through each nostril)',
      'Assess gag reflex',
      'Explain procedure and obtain consent',
      'Position patient upright (45-90 degrees) if possible',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Measure tube: nose tip to earlobe to xiphoid process', rationale: 'Determines length needed to reach stomach' },
      { step: 3, action: 'Mark measured length on tube', rationale: 'Indicates when tube is properly positioned' },
      { step: 4, action: 'Lubricate first 3-4 inches of tube', rationale: 'Facilitates insertion and reduces trauma' },
      { step: 5, action: 'Have patient tilt head slightly forward', rationale: 'Closes airway and opens esophagus' },
      { step: 6, action: 'Insert tube gently along floor of nostril', rationale: 'Follows natural passage' },
      { step: 7, action: 'When tube reaches pharynx, have patient sip water and swallow', rationale: 'Swallowing closes epiglottis and advances tube' },
      { step: 8, action: 'Advance tube with each swallow until mark is reached', rationale: 'Swallowing facilitates passage into esophagus' },
      { step: 9, action: 'Stop if patient shows signs of distress or coughing', rationale: 'May indicate tracheal placement' },
      { step: 10, action: 'Verify placement: aspirate gastric contents, check pH (<5.5)', rationale: 'Gastric pH is acidic; confirms stomach placement' },
      { step: 11, action: 'Obtain x-ray confirmation if required by policy', rationale: 'Gold standard for placement verification' },
      { step: 12, action: 'Secure tube to nose with tape or holder', rationale: 'Prevents displacement' },
      { step: 13, action: 'Connect to suction or feeding as ordered', rationale: 'Establishes intended therapy' }
    ],
    safetyAlerts: [
      'Stop immediately if patient coughs continuously, chokes, or becomes cyanotic',
      'Never force tube if resistance is met',
      'Verify placement before any instillation',
      'X-ray confirmation required for feeding tube placement',
      'Auscultation alone is NOT reliable for verification'
    ],
    nursingConsiderations: [
      'Use smaller tube (12-14 Fr) for patient comfort when possible',
      'Consider topical anesthetic if available and ordered',
      'Document nare used and tube marking at nose',
      'Verify placement before each use'
    ],
    postProcedureCare: [
      'Provide nasal and oral hygiene',
      'Monitor for complications (sinusitis, erosion)',
      'Secure tube to prevent tension',
      'Document output and patency'
    ],
    documentation: [
      'Date and time of insertion',
      'Size and type of tube',
      'Nare used',
      'Length of tube at nose',
      'Verification method and results',
      'Patient tolerance',
      'Type of drainage if applicable'
    ],
    commonErrors: [
      'Not measuring tube properly',
      'Not verifying placement before use',
      'Forcing tube against resistance',
      'Using air auscultation alone for verification'
    ],
    tips: [
      'Ice chips may be easier to swallow than water',
      'Flex chin to chest helps close trachea',
      'If gagging, pause and let patient rest',
      'Keep emesis basin nearby throughout procedure'
    ],
    references: [
      'American Association of Critical-Care Nurses. (2022). NG Tube Insertion and Verification Practice Alert.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Irving, S.Y., et al. (2014). Feeding tube placement verification: Guidelines for clinical practice. Critical Care Nurse.'
    ],
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'oxygen-nasal-cannula',
    title: 'Oxygen Therapy via Nasal Cannula',
    category: 'Oxygen Therapy',
    categorySlug: 'oxygen-therapy',
    description: 'Nasal cannula oxygen therapy delivers low-flow supplemental oxygen through a lightweight, two-pronged device placed in the nostrils. It is the most common and comfortable method of oxygen delivery.',
    indications: [
      'Hypoxemia (SpO2 <90% or per order)',
      'Respiratory distress',
      'Increased work of breathing',
      'Post-operative care',
      'Chronic respiratory conditions'
    ],
    contraindications: [
      'Complete nasal obstruction',
      'Specific contraindications vary by patient condition'
    ],
    equipment: [
      'Nasal cannula (adult or pediatric size)',
      'Oxygen flow meter',
      'Oxygen source (wall outlet or tank)',
      'Pulse oximeter',
      'Humidifier if flow >4 L/min'
    ],
    preparation: [
      'Verify oxygen order (flow rate)',
      'Check oxygen source and flow meter',
      'Assess baseline oxygen saturation',
      'Explain procedure to patient',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Verify order for oxygen therapy', rationale: 'Oxygen is a medication requiring prescription' },
      { step: 2, action: 'Perform hand hygiene', rationale: 'Infection prevention' },
      { step: 3, action: 'Attach nasal cannula tubing to flow meter', rationale: 'Establishes oxygen delivery system' },
      { step: 4, action: 'Set oxygen flow to prescribed rate', rationale: 'Delivers ordered concentration' },
      { step: 5, action: 'Verify oxygen is flowing by feeling at prongs', rationale: 'Confirms system is working' },
      { step: 6, action: 'Place prongs in patient nostrils, curving downward', rationale: 'Proper positioning delivers oxygen effectively' },
      { step: 7, action: 'Loop tubing over ears and adjust slider under chin', rationale: 'Secures cannula comfortably' },
      { step: 8, action: 'Monitor oxygen saturation', rationale: 'Assesses effectiveness of therapy' },
      { step: 9, action: 'Document application and patient response', rationale: 'Legal record and tracks effectiveness' }
    ],
    safetyAlerts: [
      'High oxygen concentrations in COPD patients may suppress respiratory drive',
      'Nasal cannula delivers FiO2 of 24-44% at 1-6 L/min',
      'Never use >6 L/min through nasal cannula',
      'Post no smoking signs - oxygen supports combustion'
    ],
    nursingConsiderations: [
      'Check for skin irritation behind ears and at nostrils',
      'Provide humidification for flows >4 L/min',
      'Monitor respiratory status continuously',
      'Educate patient and family on oxygen safety'
    ],
    postProcedureCare: [
      'Reassess oxygen saturation at regular intervals',
      'Monitor for signs of hypoxia or hyperoxia',
      'Maintain nasal hygiene',
      'Document ongoing assessments'
    ],
    documentation: [
      'Flow rate ordered and delivered',
      'Oxygen saturation before and after',
      'Patient tolerance',
      'Respiratory assessment'
    ],
    commonErrors: [
      'Setting incorrect flow rate',
      'Not checking for flow at prongs',
      'Not monitoring saturation response',
      'Using higher flow than indicated for nasal cannula'
    ],
    tips: [
      'Use gauze padding behind ears if irritation occurs',
      'Keep tubing free of kinks',
      'Check connections regularly',
      'Consider mask if higher FiO2 needed'
    ],
    references: [
      'American Thoracic Society. (2023). Oxygen Therapy Guidelines.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'British Thoracic Society. (2017). Guideline for Emergency Oxygen Use in Adult Patients.'
    ],
    difficulty: 'basic',
    estimatedTime: '5 minutes'
  },
  {
    id: 'basic-life-support',
    title: 'Basic Life Support (Adult CPR)',
    category: 'Emergency Procedures',
    categorySlug: 'emergency',
    description: 'Basic Life Support (BLS) is a level of medical care for life-threatening conditions, focusing on maintaining circulation and breathing through chest compressions and rescue breathing until advanced care arrives.',
    indications: [
      'Unresponsive patient',
      'Absence of breathing or only gasping',
      'No detectable pulse',
      'Cardiac arrest'
    ],
    contraindications: [
      'Valid DNR order in place',
      'Obviously irreversible death (rigor mortis, dependent lividity)'
    ],
    equipment: [
      'AED (Automated External Defibrillator)',
      'Pocket mask or bag-valve-mask',
      'Gloves',
      'Barrier device for rescue breathing'
    ],
    preparation: [
      'Ensure scene safety',
      'Check for responsiveness',
      'Call for help immediately',
      'Call code/activate emergency response',
      'Get AED'
    ],
    steps: [
      { step: 1, action: 'Confirm scene is safe', rationale: 'Rescuer safety is priority' },
      { step: 2, action: 'Check responsiveness: tap and shout', rationale: 'Determines if patient needs CPR' },
      { step: 3, action: 'If unresponsive, call for help and get AED', rationale: 'Early defibrillation improves survival' },
      { step: 4, action: 'Check for breathing and pulse simultaneously (10 seconds max)', rationale: 'Gasping is not adequate breathing' },
      { step: 5, action: 'If no pulse, begin chest compressions', rationale: 'Maintains circulation to vital organs' },
      { step: 6, action: 'Place heel of hand on lower half of sternum', rationale: 'Correct hand placement maximizes effectiveness' },
      { step: 7, action: 'Compress at least 2 inches deep at rate of 100-120/min', rationale: 'Adequate depth and rate essential for perfusion' },
      { step: 8, action: 'Allow full chest recoil between compressions', rationale: 'Allows heart to refill with blood' },
      { step: 9, action: 'After 30 compressions, give 2 breaths (if trained)', rationale: 'Provides oxygenation' },
      { step: 10, action: 'Continue cycles of 30:2', rationale: 'Maintains circulation until advanced help arrives' },
      { step: 11, action: 'Use AED as soon as available', rationale: 'Early defibrillation critical for shockable rhythms' },
      { step: 12, action: 'Resume CPR immediately after shock', rationale: 'Minimizes interruptions in compressions' },
      { step: 13, action: 'Continue until patient recovers, help arrives, or exhausted', rationale: 'Persistence improves outcomes' }
    ],
    safetyAlerts: [
      'Minimize interruptions in chest compressions',
      'Push hard and fast - do not be afraid to hurt patient',
      'Switch compressors every 2 minutes to prevent fatigue',
      'Clear everyone before AED shock delivery'
    ],
    nursingConsiderations: [
      'Know location of nearest AED',
      'Maintain current BLS certification',
      'Practice team dynamics in code situations',
      'Debrief after resuscitation events'
    ],
    postProcedureCare: [
      'Support advanced cardiac life support interventions',
      'Document resuscitation events',
      'Provide family support and updates',
      'Participate in debriefing'
    ],
    documentation: [
      'Time CPR initiated',
      'Interventions performed',
      'Response to interventions',
      'Time of ROSC or cessation',
      'Team members present'
    ],
    commonErrors: [
      'Compressing too shallow',
      'Rate too slow or too fast',
      'Not allowing full chest recoil',
      'Excessive ventilation',
      'Prolonged pulse checks'
    ],
    tips: [
      'Push to the beat of "Stayin Alive" for correct rate',
      'Lock elbows and push straight down',
      'Avoid leaning on chest between compressions',
      'Hands-only CPR is acceptable if untrained in rescue breathing'
    ],
    references: [
      'American Heart Association. (2020). Guidelines for CPR and Emergency Cardiovascular Care.',
      'European Resuscitation Council. (2021). Guidelines for Resuscitation.',
      'International Liaison Committee on Resuscitation. (2020). Consensus on CPR and ECC Science.'
    ],
    difficulty: 'intermediate',
    estimatedTime: 'Until help arrives'
  },
  {
    id: 'patient-bed-bath',
    title: 'Complete Bed Bath',
    category: 'Fundamentals of Nursing',
    categorySlug: 'fundamentals',
    description: 'A complete bed bath is provided to patients who are unable to bathe themselves. It maintains hygiene, promotes comfort, allows for skin assessment, and provides an opportunity for therapeutic communication.',
    indications: [
      'Immobile patients',
      'Critically ill patients',
      'Post-operative patients',
      'Patients with activity restrictions',
      'Patients requiring total care'
    ],
    contraindications: [
      'Patient refusal (respect autonomy)',
      'Unstable vital signs (modify approach)'
    ],
    equipment: [
      'Bath basin with warm water (110-115°F)',
      'Bath towels (2-3)',
      'Washcloths (2-3)',
      'Bath blanket',
      'Soap or no-rinse cleanser',
      'Clean gown and linens',
      'Lotion',
      'Oral hygiene supplies',
      'Laundry hamper',
      'Clean gloves'
    ],
    preparation: [
      'Explain procedure to patient',
      'Offer toileting before bath',
      'Gather all supplies',
      'Adjust room temperature',
      'Provide privacy',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Cover patient with bath blanket, remove gown', rationale: 'Maintains warmth and privacy' },
      { step: 3, action: 'Make mitt with washcloth', rationale: 'Prevents cold cloth ends from dragging on skin' },
      { step: 4, action: 'Wash eyes first: inner canthus to outer, no soap', rationale: 'Clean to dirty principle; soap irritates eyes' },
      { step: 5, action: 'Wash face, ears, and neck', rationale: 'Face washed before other areas' },
      { step: 6, action: 'Wash arms: far arm first, axilla to fingertips', rationale: 'Far side reduces reaching over clean areas' },
      { step: 7, action: 'Place hands in basin if able', rationale: 'Soaking softens nails and removes debris' },
      { step: 8, action: 'Wash chest and abdomen', rationale: 'Assess skin during bathing' },
      { step: 9, action: 'Wash legs: far leg first, thigh to foot', rationale: 'Promotes venous return' },
      { step: 10, action: 'Place feet in basin if able', rationale: 'Soaking is therapeutic and cleansing' },
      { step: 11, action: 'Change water and washcloth', rationale: 'Fresh water for perineal area' },
      { step: 12, action: 'Wash perineal area (front to back in females)', rationale: 'Prevents contamination from rectal area' },
      { step: 13, action: 'Turn patient and wash back', rationale: 'Completes cleaning and allows back assessment' },
      { step: 14, action: 'Apply lotion, focusing on bony prominences', rationale: 'Moisturizes skin and increases circulation' },
      { step: 15, action: 'Apply clean gown and linens', rationale: 'Completes hygiene and comfort' }
    ],
    safetyAlerts: [
      'Assess skin for breakdown during bath',
      'Maintain fall precautions if sitting up',
      'Check water temperature before applying',
      'Watch for fatigue in cardiac or respiratory patients'
    ],
    nursingConsiderations: [
      'Use bath time for therapeutic communication',
      'Assess range of motion and mobility',
      'Document skin conditions observed',
      'Modify based on patient tolerance'
    ],
    postProcedureCare: [
      'Position patient comfortably',
      'Raise side rails if indicated',
      'Place call light within reach',
      'Document care and observations'
    ],
    documentation: [
      'Type of bath given',
      'Patient tolerance',
      'Skin assessment findings',
      'Any abnormalities noted'
    ],
    commonErrors: [
      'Water too hot or too cold',
      'Leaving patient exposed and cold',
      'Not changing water when dirty',
      'Rushing through assessment opportunities'
    ],
    tips: [
      'Organize supplies before starting',
      'Work systematically to avoid missing areas',
      'Keep talking to maintain comfort',
      'Combine with linen change for efficiency'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Craven, R.F., & Hirnle, C.J. (2023). Fundamentals of Nursing, 9th ed.',
      'Taylors Fundamentals of Nursing. (2023). 10th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'patient-positioning',
    title: 'Patient Positioning and Repositioning',
    category: 'Fundamentals of Nursing',
    categorySlug: 'fundamentals',
    description: 'Patient positioning involves placing patients in specific positions to maintain body alignment, prevent complications, promote comfort, and facilitate procedures. Regular repositioning prevents pressure injuries.',
    indications: [
      'Immobile patients',
      'Prevention of pressure injuries',
      'Therapeutic positioning for conditions',
      'Procedural positioning',
      'Post-operative care'
    ],
    contraindications: [
      'Unstable spine injury',
      'Certain hip fractures or surgeries',
      'Condition-specific restrictions per physician'
    ],
    equipment: [
      'Pillows (various sizes)',
      'Positioning wedges',
      'Draw sheet or lift sheet',
      'Heel protectors',
      'Hand rolls',
      'Additional staff for assistance'
    ],
    preparation: [
      'Review mobility restrictions',
      'Explain procedure to patient',
      'Obtain assistance if needed',
      'Lower bed and lock brakes',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene', rationale: 'Infection prevention' },
      { step: 2, action: 'Explain procedure and intended position to patient', rationale: 'Promotes cooperation and reduces anxiety' },
      { step: 3, action: 'Lower head of bed if appropriate', rationale: 'Reduces shearing during repositioning' },
      { step: 4, action: 'Use draw sheet for repositioning', rationale: 'Reduces friction and protects skin' },
      { step: 5, action: 'Move patient toward edge before turning', rationale: 'Ensures patient ends up in center of bed' },
      { step: 6, action: 'Turn patient using proper body mechanics', rationale: 'Protects nurse and patient from injury' },
      { step: 7, action: 'Position patient in desired position', rationale: 'Achieves therapeutic goal' },
      { step: 8, action: 'Place pillows to maintain alignment', rationale: 'Supports joints and prevents strain' },
      { step: 9, action: 'Protect bony prominences with pillows or pads', rationale: 'Prevents pressure injury' },
      { step: 10, action: 'Ensure no pressure on heels', rationale: 'Heels are high-risk pressure areas' },
      { step: 11, action: 'Check extremity alignment and support', rationale: 'Prevents contractures and nerve damage' },
      { step: 12, action: 'Assess patient comfort and adjust as needed', rationale: 'Promotes compliance with positioning' }
    ],
    safetyAlerts: [
      'Reposition at least every 2 hours',
      'Do not drag patient across sheets - use lift sheet',
      'Get adequate help for dependent patients',
      'Assess skin at each position change'
    ],
    nursingConsiderations: [
      'Document time and position in turning schedule',
      'Consider specialty beds for high-risk patients',
      'Coordinate positioning with other care activities',
      'Individualize based on patient tolerance'
    ],
    postProcedureCare: [
      'Ensure patient is comfortable',
      'Place call light within reach',
      'Document position and skin condition'
    ],
    documentation: [
      'Time of position change',
      'Position achieved',
      'Skin assessment findings',
      'Patient tolerance',
      'Devices used'
    ],
    commonErrors: [
      'Waiting too long between position changes',
      'Not using enough pillows for support',
      'Leaving heels on mattress',
      'Not checking skin before and after'
    ],
    tips: [
      'Use 30-degree rule for lateral positioning',
      'Float heels off bed with pillow under calves',
      'Check for wrinkles in sheets under patient',
      'Use positioning devices consistently'
    ],
    references: [
      'National Pressure Ulcer Advisory Panel. (2019). Prevention and Treatment of Pressure Ulcers/Injuries.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Agency for Healthcare Research and Quality. (2023). Pressure Injury Prevention Guidelines.'
    ],
    difficulty: 'basic',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'urinary-catheter-male',
    title: 'Urinary Catheter Insertion (Male)',
    category: 'Catheterization',
    categorySlug: 'catheterization',
    description: 'Male urinary catheterization involves inserting a flexible tube through the urethra into the bladder. The male urethra is longer and has two curves, requiring specific technique modifications.',
    indications: [
      'Acute urinary retention',
      'Accurate urine output monitoring',
      'Perioperative use',
      'Bladder irrigation',
      'Chronic retention when intermittent catheterization not feasible'
    ],
    contraindications: [
      'Suspected urethral injury',
      'Blood at urethral meatus',
      'Recent prostate surgery (consult physician)',
      'Known urethral stricture'
    ],
    equipment: [
      'Sterile catheterization kit',
      'Foley catheter (16-18 Fr typically for adults)',
      'Sterile gloves (2 pairs)',
      'Antiseptic solution',
      'Sterile lubricant (generous amount)',
      'Prefilled syringe with sterile water',
      'Drainage bag',
      'Waterproof pad'
    ],
    preparation: [
      'Verify order and indication',
      'Explain procedure to patient',
      'Provide privacy',
      'Position patient supine with legs slightly apart',
      'Perform hand hygiene',
      'Open sterile supplies'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Initial cleansing protection' },
      { step: 2, action: 'Cleanse penis and perineal area with soap and water', rationale: 'Removes gross contamination' },
      { step: 3, action: 'Remove gloves, hand hygiene, don sterile gloves', rationale: 'Establishes sterile technique' },
      { step: 4, action: 'Organize sterile field and test catheter balloon', rationale: 'Ensures equipment function' },
      { step: 5, action: 'Apply generous sterile lubricant to catheter (10-15 cm)', rationale: 'Male urethra longer; needs more lubrication' },
      { step: 6, action: 'With non-dominant hand, hold penis perpendicular to body', rationale: 'Straightens urethra for easier passage' },
      { step: 7, action: 'Retract foreskin if present', rationale: 'Exposes meatus for cleansing' },
      { step: 8, action: 'Cleanse meatus with antiseptic in circular motion', rationale: 'Reduces microorganisms at insertion site' },
      { step: 9, action: 'Hold penis at 60-90 degree angle to body', rationale: 'Straightens prostatic curve' },
      { step: 10, action: 'Insert catheter slowly until urine flows (15-20 cm)', rationale: 'Male urethra approximately 20 cm long' },
      { step: 11, action: 'Lower penis and advance catheter 2-3 cm more', rationale: 'Ensures tip is fully in bladder' },
      { step: 12, action: 'Inflate balloon with sterile water per manufacturer', rationale: 'Secures catheter in bladder' },
      { step: 13, action: 'Gently pull back until resistance felt', rationale: 'Positions balloon at bladder neck' },
      { step: 14, action: 'Replace foreskin if retracted', rationale: 'Prevents paraphimosis' },
      { step: 15, action: 'Secure catheter to lower abdomen or thigh', rationale: 'Reduces urethral trauma and movement' },
      { step: 16, action: 'Position drainage bag below bladder', rationale: 'Promotes drainage by gravity' }
    ],
    safetyAlerts: [
      'STOP if resistance is met - do not force',
      'Never inflate balloon until urine is flowing',
      'ALWAYS replace foreskin after procedure to prevent paraphimosis',
      'Use larger catheter with more lubricant if BPH suspected',
      'Contact physician if unable to pass catheter'
    ],
    nursingConsiderations: [
      'Consider coude catheter for patients with BPH',
      'Use lidocaine gel if available and ordered',
      'Assess for prostatic enlargement history',
      'Monitor for complications'
    ],
    postProcedureCare: [
      'Document initial urine output',
      'Monitor for hematuria',
      'Assess for patient comfort',
      'Provide catheter care education'
    ],
    documentation: [
      'Date and time of insertion',
      'Catheter size and type',
      'Amount of water used for balloon',
      'Initial urine amount and characteristics',
      'Patient tolerance'
    ],
    commonErrors: [
      'Not using enough lubricant',
      'Not holding penis correctly',
      'Inflating balloon before adequate insertion',
      'Forgetting to replace foreskin'
    ],
    tips: [
      'Warn patient of pressure sensation',
      'Ask patient to bear down gently at prostatic curve',
      'Use gentle steady pressure at resistance points',
      'Consider specialist referral if difficult insertion'
    ],
    references: [
      'Urological Association. (2023). Catheter Guidelines.',
      'CDC. (2023). CAUTI Prevention Guidelines.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'catheter-care',
    title: 'Indwelling Catheter Care',
    category: 'Catheterization',
    categorySlug: 'catheterization',
    description: 'Indwelling catheter care involves maintaining hygiene at the catheter insertion site and along the drainage system to prevent catheter-associated urinary tract infections (CAUTI).',
    indications: [
      'All patients with indwelling urinary catheters',
      'Routine daily care',
      'When soiling occurs',
      'Per facility policy intervals'
    ],
    contraindications: [
      'None - all catheterized patients require care'
    ],
    equipment: [
      'Clean washcloth',
      'Soap and water or perineal cleanser',
      'Clean towel',
      'Clean gloves',
      'Waterproof pad'
    ],
    preparation: [
      'Explain procedure to patient',
      'Provide privacy',
      'Position patient supine',
      'Gather supplies',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Place waterproof pad under patient', rationale: 'Protects bedding' },
      { step: 3, action: 'Gently wash perineal area with soap and water', rationale: 'Removes secretions and bacteria' },
      { step: 4, action: 'Clean catheter from meatus outward 4 inches', rationale: 'Cleans from clean to dirty' },
      { step: 5, action: 'Rinse thoroughly', rationale: 'Removes soap residue' },
      { step: 6, action: 'Pat dry gently', rationale: 'Moisture promotes bacterial growth' },
      { step: 7, action: 'Check catheter securement device', rationale: 'Prevents traction on catheter' },
      { step: 8, action: 'Ensure tubing is not kinked', rationale: 'Maintains drainage' },
      { step: 9, action: 'Verify drainage bag is below bladder level', rationale: 'Promotes gravity drainage and prevents reflux' },
      { step: 10, action: 'Empty drainage bag as needed', rationale: 'Prevents overfilling and reflux' }
    ],
    safetyAlerts: [
      'Never disconnect catheter from drainage tubing',
      'Do not raise drainage bag above bladder level',
      'Report signs of infection immediately',
      'Advocate for catheter removal when no longer indicated'
    ],
    nursingConsiderations: [
      'Assess catheter necessity daily',
      'Monitor urine characteristics',
      'Maintain closed drainage system',
      'Educate patient and family on care'
    ],
    postProcedureCare: [
      'Position patient comfortably',
      'Document care provided',
      'Report any abnormalities'
    ],
    documentation: [
      'Time of catheter care',
      'Condition of meatus and surrounding skin',
      'Urine characteristics',
      'Any patient concerns'
    ],
    commonErrors: [
      'Breaking closed system unnecessarily',
      'Not cleaning catheter properly',
      'Allowing bag to rest on floor',
      'Not checking for kinks in tubing'
    ],
    tips: [
      'Perform catheter care during routine hygiene',
      'Use catheter care checklist',
      'Document daily catheter necessity assessment',
      'Empty bag before transporting patient'
    ],
    references: [
      'CDC. (2023). CAUTI Prevention Guidelines.',
      'AHRQ. (2023). Comprehensive Unit-based Safety Program for CAUTI.',
      'Infusion Nurses Society. (2021). Infusion Therapy Standards of Practice.'
    ],
    difficulty: 'basic',
    estimatedTime: '10-15 minutes'
  }
];

export const getProcedureById = (id: string): Procedure | undefined => {
  return procedures.find(p => p.id === id);
};

export const getProceduresByCategory = (categorySlug: string): Procedure[] => {
  return procedures.filter(p => p.categorySlug === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const searchProcedures = (query: string): Procedure[] => {
  const lowerQuery = query.toLowerCase();
  return procedures.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};
