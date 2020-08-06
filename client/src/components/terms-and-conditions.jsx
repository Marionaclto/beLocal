import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import BottomNavbar from './bottom-navbar'
import './terms-and-conditions.css'

class Terms extends React.Component {
  state = {
    brandName: 'beLocal',
  }

  render() {
    const { brandName } = this.state
    return (
      <div className='terms-container'>
        <br />
        <h1>Terms and conditions</h1>
        <p>
          Please read these Terms of Service for European Users (“Terms”)
          carefully as they contain important information about your legal
          rights, remedies and obligations. By accessing or using the{' '}
          {brandName} Platform, you agree to comply with and be bound by these
          Terms.
        </p>
        <p>
          Please note: Section 19 of these Terms contains an arbitration clause
          and class action waiver that applies to all claims brought against{' '}
          {brandName} in the United States. It affects how disputes with{' '}
          {brandName} are resolved. By accepting these Terms, you agree to be
          bound by this arbitration clause and class action waiver. Please read
          it carefully.
        </p>
        <p>
          You can access the European Commission’s online dispute resolution
          platform here: http://ec.europa.eu/consumers/odr. Please note that{' '}
          {brandName} is not committed nor obliged to use an alternative dispute
          resolution entity to resolve disputes with consumers.
        </p>
        <p>Last Updated: July 15, 2020</p>
        <p>Thank you for using {brandName}!</p>
        <p>
          These Terms constitute a legally binding agreement ("Agreement")
          between you and {brandName}
          (as defined below) governing your access to and use of the {
            brandName
          }{' '}
          website, including any subdomains thereof, and any other websites
          through which {brandName} makes its services available (collectively,
          "Site"), our mobile, tablet and other smart device applications, and
          application program interfaces (collectively, "Application") and all
          associated services (collectively, "{brandName} Services"). The Site,
          Application and {brandName} Services together are hereinafter
          collectively referred to as the “{brandName} Platform”. Our
          Nondiscrimination Policy and other Policies applicable to your use of
          the {brandName} Platform are incorporated by reference into this
          Agreement.
        </p>
        <p>
          If you change your country of residence or establishment to a country
          outside of the EEA, the {brandName} company you contract with and the
          applicable Terms of Service will be determined by your new country of
          residence or establishment as specified in the Terms of Service for
          Non-European Users, from the date on which your country of residence
          or establishment changes.
        </p>
        <p>
          Our collection and use of personal information in connection with your
          access to and use of the {brandName} Platform is described in our
          Privacy Policy.
        </p>
        <p>
          Any and all payment processing services through or in connection with
          your use of the
          {brandName} Platform ("Payment Services") are provided to you by one
          or more {brandName}
          Payments entities (individually and collectively, as appropriate, "
          {brandName} Payments") as set out in the Payments Terms of Service
          ("Payments Terms").
        </p>
        <p>
          Hosts alone are responsible for identifying, understanding, and
          complying with all laws, rules and regulations that apply to their
          Listings and Host Services (as defined below). For example, some
          cities have laws that restrict their ability to host paying guests for
          short periods or provide certain Host Services. In many cities, Hosts
          may have to register, get a permit or obtain a license before
          providing certain Host Services (such as preparing food, serving
          alcohol for sale, guiding tours or operating a vehicle). Host are
          alone responsible for identifying and obtaining any required licenses,
          permits, or registrations for any Host Services they offer. Certain
          types of Host Services may be prohibited altogether. Penalties may
          include fines or other enforcement. We provide some information in our
          Help Center to help you identify some of the obligations that apply to
          you. If you have questions about how local laws apply to your
          Listing(s) and Host Service(s) on
          {brandName}, you should always seek legal guidance.
        </p>
        <h4>Table of Contents</h4>
        <ol>
          <li>Scope of {brandName} Services</li>
          <li>
            Eligibility, Using the {brandName} Platform, Member Verification
          </li>
          <li>Modification of these Terms</li>
          <li>Account Registration</li>
          <li>Content</li>
          <li>Service Fees</li>
          <li>Terms specific for Hosts</li>
          <li>Terms specific for Guests</li>
          <li>
            Booking Modifications, Cancellations and Refunds, Resolution Center
          </li>
          <li>Ratings and Reviews</li>
          <li>Damage to Accommodations, Disputes between Members</li>
          <li>Rounding off, Currency conversion</li>
          <li>Taxes</li>
          <li>Prohibited Activities</li>
          <li>Term and Termination, Suspension and other Measures</li>
          <li>Disclaimers</li>
          <li>Liability</li>
          <li>Indemnification</li>
          <li>Dispute Resolution</li>
          <li>Feedback</li>
          <li>Applicable Law and Jurisdiction</li>
          <li>General Provisions</li>
        </ol>
        <h4>1. Scope of {brandName} Services</h4>
        <p>
          1.1 The {brandName} Platform is an online marketplace that enables
          registered users (“Members”) and certain third parties who offer
          services (Members and third parties who offer services are “Hosts” and
          the services they offer are “Host Services”) to publish such Host
          Services on the {brandName} Platform (“Listings”) and to communicate
          and transact directly with Members that are seeking to book such Host
          Services (Members using Host Services are “Guests”). Host Services may
          include the offering of vacation or other properties for use
          ("Accommodations"), single or multi-day activities in various
          categories (“Experiences”), access to unique events and locations
          (“Events”), and a variety of other travel and non-travel related
          services.
        </p>
        <p>
          1.2 As the provider of the {brandName} Platform, {brandName} does not
          own, create, sell, resell, provide, control, manage, offer, deliver,
          or supply any Listings or Host Services, nor is {brandName} an
          organiser or retailer of travel packages under Directive (EU)
          2015/2302. Hosts alone are responsible for their Listings and Host
          Services. When Members make or accept a booking, they are entering
          into a contract directly with each other. {brandName} is not and does
          not become a party to or other participant in any contractual
          relationship between Members, nor is {brandName} a real estate broker
          or insurer. {brandName} is not acting as an agent in any capacity for
          any Member, except as specified in the Payments Terms.
        </p>
        <p>
          1.3 While we may help facilitate the resolution of disputes,{' '}
          {brandName} has no control over and does not guarantee (i) the
          existence, quality, safety, suitability, or legality of any Listings
          or Host Services, (ii) the truth or accuracy of any Listing
          descriptions, Ratings, Reviews, or other Member Content (as defined
          below), or (iii) the performance or conduct of any Member or third
          party. {brandName} does not endorse any Member, Listing or Host
          Services. Any references to a Member being "verified" (or similar
          language) only indicate that the Member has completed a relevant
          verification or identification process and nothing else. Any such
          description is not an endorsement, certification or guarantee by{' '}
          {brandName} about any Member, including of the Member's identity or
          background or whether the Member is trustworthy, safe or suitable. You
          should always exercise due diligence and care when deciding whether to
          stay in an Accommodation, participate in an Experience or Event or use
          other Host Services, accept a booking request from a Guest, or
          communicate and interact with other Members, whether online or in
          person. Verified Images (as defined below) are intended only to
          indicate a photographic representation of a Listing at the time the
          photograph was taken, and are therefore not an endorsement by{' '}
          {brandName} of any Host or Listing.
        </p>
        <p>
          1.4 If you choose to use the {brandName} Platform as a Host or Co-Host
          (as defined below), your relationship with {brandName} is limited to
          being an independent, third-party contractor, and not an employee,
          agent, joint venturer or partner of {brandName} for any reason, and
          you act exclusively on your own behalf and for your own benefit, and
          not on behalf, or for the benefit, of {brandName}. {brandName} does
          not, and shall not be deemed to, direct or control you generally or in
          your performance under these Terms specifically, including in
          connection with your provision of the Host Services. You acknowledge
          that you have complete discretion whether to list Host Services or
          otherwise engage in other business or employment activities.
        </p>
        <p>
          1.5 To promote the {brandName} Platform and to increase the exposure
          of Listings to potential Guests, Listings and other Member Content may
          be displayed on other websites, in applications, within emails, and in
          online and offline advertisements in accordance with Section 5. To
          assist Members who speak different languages, {brandName} may make
          automated tools available to enable Members to translate Listings and
          other Member Content, in whole or in part, into other languages.
          Members are free to use these tools at their own discretion.{' '}
          {brandName} cannot guarantee the accuracy or quality of such
          translations and Members are responsible for reviewing and verifying
          the accuracy of such translations.
        </p>
        <p>
          1.6 The {brandName} Platform may contain links to third-party websites
          or resources (“Third-Party Services”). Such Third-Party Services may
          be subject to different terms and conditions and privacy practices.{' '}
          {brandName} is not responsible or liable for the availability or
          accuracy of such Third-Party Services, or the content, products, or
          services available from such Third-Party Services. Links to such
          Third-Party Services are not an endorsement by {brandName} of such
          Third-Party Services.
        </p>
        <p>
          1.7 {brandName} is not responsible for outages or disruptions of the
          Internet and telecommunications infrastructure which are beyond our
          control and can lead to interruptions in the availability of the{' '}
          {brandName} Platform. {brandName} may, temporarily and under
          consideration of the Members’ legitimate interests (e.g. by providing
          prior notice), restrict the availability of the {brandName} Platform
          or certain areas or features thereof, if this is necessary in view of
          capacity limits, the security or integrity of our servers, or to carry
          out maintenance measures that ensure the proper or improved
          functioning of the {brandName} Platform. Section 17 (Liability)
          remains unaffected. {brandName} may improve, enhance and modify the{' '}
          {brandName} Platform and introduce new {brandName} Services from time
          to time. {brandName} will provide notice to Members of any changes to
          the {brandName} Platform, unless such changes are of minor nature
          without having a material effect on the parties’ contractual
          obligations.
        </p>
        <h4>
          2. Eligibility, Using the {brandName} Platform, Member Verification
        </h4>
        <p>
          2.1 In order to access and use the {brandName} Platform or register an{' '}
          {brandName} Account you must be an individual at least 18 years old or
          a duly organized, validly existing business, organization or other
          legal entity in good standing under the laws of the country you are
          registered and able to enter into legally binding contracts.
        </p>
        <p>
          2.2 You will comply with any applicable export control laws in your
          local jurisdiction. You also represent and warrant that (i) neither
          you nor your Host Service(s) are located or take place in a country
          that is subject to a U.S. Government embargo, or that has been
          designated by the U.S. Government as a "terrorist supporting" country,
          and (ii) you are not listed on any U.S. Government list of prohibited
          or restricted parties.
        </p>
        <p>
          2.3 {brandName} may make access to and use of the {brandName}{' '}
          Platform, or certain areas or features of the {brandName} Platform,
          subject to certain conditions or requirements, such as completing a
          verification process, meeting specific quality or eligibility
          criteria, meeting Ratings or Reviews thresholds, or a Member’s booking
          and cancellation history.
        </p>
        <p>
          2.4 User verification on the Internet is difficult and we do not
          assume any responsibility for the confirmation of any Member’s
          identity. Notwithstanding the above, for transparency and fraud
          prevention purposes, and as permitted by applicable laws, we may, but
          have no obligation to (i) ask Members to provide a form of government
          identification or other information or undertake additional checks
          designed to help verify the identities or backgrounds of Members, (ii)
          screen Members against third party databases or other sources and
          request reports from service providers, and (iii) where we have
          sufficient information to identify a Member, obtain reports from
          public records of criminal convictions or sex offender registrations
          or an equivalent version of background or registered sex offender
          checks in your local jurisdiction (if available).
        </p>
        <p>
          2.5 The access to or use of certain areas and features of the{' '}
          {brandName} Platform may be subject to separate policies, standards or
          guidelines, or may require that you accept additional terms and
          conditions,before you can access the relevant areas or features of the{' '}
          {brandName} Platform. If there is a conflict between these Terms and
          terms and conditions applicable to a specific area or feature of the{' '}
          {brandName} Platform, the latter terms and conditions will take
          precedence with respect to your access to or use of that area or
          feature, unless specified otherwise in the latter terms and
          conditions.
        </p>
        <p>
          2.6 If you access or download the Application from the Apple App
          Store, you agree to Apple’s Licensed Application End User License
          Agreement. Some areas of the {brandName} Platform implement Google
          Maps/Earth mapping services, including Google Maps API(s). Your use of
          Google Maps/Earth is subject to the Google Maps/Google Earth
          Additional Terms of Service.
        </p>
        <h4>3. Modification of these Terms</h4>
        <p>
          {brandName} reserves the right to modify these Terms at any time in
          accordance with this provision. If we make changes to these Terms, we
          will post the revised Terms on the {brandName} Platform and update the
          “Last Updated” date at the top of these Terms. We will also provide
          you with notice of the modifications by email at least thirty (30)
          days before the date they become effective. If you disagree with the
          revised Terms, you may terminate this Agreement with immediate effect.
          We will inform you about your right to terminate the Agreement in the
          notification email. If you do not terminate your Agreement before the
          date the revised Terms become effective, your continued access to or
          use of the {brandName} Platform will constitute acceptance of the
          revised Terms.
        </p>
        <h4>4. Account Registration</h4>
        <p>
          4.1 You must register an account ("{brandName} Account") to access and
          use certain features of the {brandName} Platform, such as publishing
          or booking a Listing. If you are registering an {brandName} Account
          for a business, organization or other legal entity, you represent and
          warrant that you have the authority to legally bind that entity and
          grant us all permissions and licenses provided in these Terms.
        </p>
        <p>
          4.2 You can register an {brandName} Account using an email address and
          creating a password, or through your account with certain third-party
          social networking services, such as Facebook or Google ("SNS
          Account"). You have the ability to disable the connection between your{' '}
          {brandName} Account and your SNS Account at any time, by accessing the
          "Settings" section of the {brandName} Platform.
        </p>
        <p>
          4.3 You must provide accurate, current and complete information during
          the registration process and keep your {brandName} Account and public{' '}
          {brandName} Account profile page information up-to-date at all times.
        </p>
        <p>
          4.4 You may not register more than one (1) {brandName} Account unless{' '}
          {brandName} authorizes you to do so. You may not assign or otherwise
          transfer your {brandName} Account to another party.
        </p>
        <p>
          4.5 You are responsible for maintaining the confidentiality and
          security of your {brandName} Account credentials and may not disclose
          your credentials to any third party. You must immediately notify{' '}
          {brandName} if you know or have any reason to suspect that your
          credentials have been lost, stolen, misappropriated, or otherwise
          compromised or in case of any actual or suspected unauthorized use of
          your {brandName} Account. You are liable for any and all activities
          conducted through your {brandName} Account, unless such activities are
          not authorized by you and you are not otherwise negligent (such as
          failing to report the unauthorized use or loss of your credentials).
        </p>
        <p>
          4.6 {brandName} may enable features that allow you to authorize other
          Members or certain third parties to take certain actions that affect
          your {brandName} Account. For example, we may enable Members to link
          their {brandName} Accounts to businesses and take actions for those
          businesses, we may enable eligible Members or certain third parties to
          book Listings on behalf of other Members, or we may enable Hosts to
          add other Members as Co-Hosts (as defined below) to help manage their
          Listings. These features do not require that you share your
          credentials with any other person. No third party is authorized by{' '}
          {brandName} to ask for your credentials, and you shall not request the
          credentials of another Member.
        </p>
        <h4>5. Content</h4>
        <p>
          5.1 {brandName} may enable Members to (i) create, upload, post, send,
          receive and store content, such as text, photos, audio, video, or
          other materials and information on or through the {brandName} Platform
          ("Member Content"); and (ii) access and view Member Content and any
          content that {brandName} itself makes available on or through the{' '}
          {brandName} Platform, including proprietary {brandName} content and
          any content licensed or authorized for use by or through {brandName}{' '}
          from a third party ("{brandName} Content" and together with Member
          Content, "Collective Content").
        </p>
        <p>
          5.2 The {brandName} Platform, {brandName} Content, and Member Content
          may in its entirety or in part be protected by copyright, trademark,
          and/or other laws of the United States and other countries. You
          acknowledge and agree that the {brandName} Platform and {brandName}{' '}
          Content, including all associated intellectual property rights, are
          the exclusive property of {brandName} and/or its licensors or
          authorizing third-parties. You will not remove, alter or obscure any
          copyright, trademark, service mark or other proprietary rights notices
          incorporated in or accompanying the {brandName} Platform, {brandName}{' '}
          Content or Member Content. All trademarks, service marks, logos, trade
          names, and any other source identifiers of {brandName} used on or in
          connection with the {brandName} Platform and {brandName} Content are
          trademarks or registered trademarks of {brandName} in the United
          States and abroad. Trademarks, service marks, logos, trade names and
          any other proprietary designations of third parties used on or in
          connection with the {brandName} Platform, {brandName} Content, and/or
          Collective Content are used for identification purposes only and may
          be the property of their respective owners.
        </p>
        <p>
          5.3 You will not use, copy, adapt, modify, prepare derivative works
          of, distribute, license, sell, transfer, publicly display, publicly
          perform, transmit, broadcast or otherwise exploit the {brandName}{' '}
          Platform or Collective Content, except to the extent you are the legal
          owner of certain Member Content or as expressly permitted in these
          Terms. No licenses or rights are granted to you by implication or
          otherwise under any intellectual property rights owned or controlled
          by {brandName} or its licensors, except for the licenses and rights
          expressly granted in these Terms.
        </p>
        <p>
          5.4 Subject to your compliance with these Terms, {brandName} grants
          you a limited, non-exclusive, non-sublicensable, revocable,
          non-transferable license to (i) download and use the Application on
          your personal device(s); and (ii) access and view any Collective
          Content made available on or through the {brandName} Platform and
          accessible to you, solely for your personal and non-commercial use.
        </p>
        <p>
          5.5 By uploading, posting or otherwise making available any Member
          Content on or through the {brandName} Platform, you grant to{' '}
          {brandName}, as you create, publish or make it available, a
          non-exclusive, worldwide, royalty-free, sub-licensable and
          transferable license to such Member Content, for the term of the
          protection of the rights so licensed, to access, use, store, copy,
          modify, prepare derivative works of, distribute, publish, transmit,
          stream, broadcast, and otherwise exploit in any manner such Member
          Content to provide and/or promote the {brandName} Platform, in any
          media or platform, known or unknown to date and in particular on
          Internet and social networks. Insofar as Member Content (including
          Verified Images) includes personal information, such Member Content
          will only be used for these purposes if such use complies with
          applicable data protection laws in accordance with our Privacy Policy.
          Unless you provide specific consent, {brandName} does not claim any
          ownership rights in any Member Content and nothing in these Terms will
          be deemed to restrict any rights that you may have to use or exploit
          your Member Content.
        </p>
        <p>
          5.6 {brandName} may offer Hosts the option of having professional
          photographers take photographs of their Host Services, which are made
          available by the photographer to Hosts to include in their Listings
          with or without a watermark or tag bearing the words "{brandName}.com
          Verified Photo" or similar wording ("Verified Images"). You are
          responsible for ensuring that your Host Service is accurately
          represented in the Verified Images and you will stop using the
          Verified Images on or through the {brandName} Platform if they no
          longer accurately represent your Listing, if you stop hosting the Host
          Service featured, or if your {brandName} Account is terminated or
          suspended for any reason. You acknowledge that you hold no ownership
          right whatsoever in the intellectual property related to any Verified
          Images. You acknowledge and agree that {brandName} shall have the
          right to use any Verified Images in accordance with Section 5.5
          including to provide and promote the Platform. {brandName} in turn
          grants you a limited, non-exclusive, non-sublicensable, revocable,
          non-transferable license to use Verified Images outside of the{' '}
          {brandName} Platform solely for your personal and non-commercial use.
        </p>
        <p>
          5.7 You are solely responsible for all Member Content that you make
          available on or through the {brandName} Platform. Accordingly, you
          represent and warrant that: (i) you either are the sole and exclusive
          owner of all Member Content that you make available on or through the{' '}
          {brandName} Platform or you have all rights, licenses, consents and
          releases that are necessary to grant to {brandName} the rights in and
          to such Member Content, as contemplated under these Terms; and (ii)
          neither the Member Content nor your posting, uploading, publication,
          submission or transmittal of the Member Content or {brandName}'s use
          of the Member Content (or any portion thereof) as contemplated under
          these Terms will infringe, misappropriate or violate a third party's
          patent, copyright, trademark, trade secret, moral rights or other
          proprietary or intellectual property rights, or rights of publicity or
          privacy, or result in the violation of any applicable law or
          regulation.
        </p>
        <p>
          5.8 You will not post, upload, publish, submit or transmit any Member
          Content that: (i) is fraudulent, false, misleading (directly or by
          omission or failure to update information) or deceptive; (ii) is
          defamatory, libelous, obscene, pornographic, vulgar or offensive;
          (iii) promotes discrimination, bigotry, racism, hatred, harassment or
          harm against any individual or group; (iv) is violent or threatening
          or promotes violence or actions that are threatening to any other
          person or animal; (v) promotes illegal or harmful activities or
          substances; or (vi) violates {brandName}’s Content Policy or any other{' '}
          {brandName} policy. {brandName} may remove or disable access to any
          Member Content that is in violation of applicable law, these Terms or{' '}
          {brandName}’s then-current Policies or Standards, or otherwise may be
          harmful or objectionable to {brandName}, its Members, third parties,
          or property. Where {brandName} removes or disables Member Content,{' '}
          {brandName} will notify a Member and provide the reasons for such a
          measure, unless such notification would (i) prevent or impede the
          detection or prevention of fraud or other illegal activities, (ii)
          harm the legitimate interests of other Members or third parties, or
          (ii) contravene applicable laws. You may appeal such a decision by
          contacting customer service.
        </p>
        <p>
          5.9 {brandName} respects copyright law and expects its Members to do
          the same. If you believe that any content on the {brandName} Platform
          infringes copyrights you own, please notify us in accordance with our
          Copyright Policy.
        </p>
        <h4>6. Service Fees</h4>
        <p>
          6.1 {brandName} may charge fees to Hosts ("Host Fees") and/or Guests
          ("Guest Fees") (collectively, "Service Fees") in consideration for the
          use of the {brandName} Platform. More information about when Service
          Fees apply and how they are calculated can be found on our Service
          Fees page.
        </p>
        <p>
          6.2 Any applicable Service Fees (including any applicable Taxes) will
          be displayed to a Host or Guest prior to publishing or booking a
          Listing. {brandName} reserves the right to change the Service Fees at
          any time, and will provide Members adequate notice of any fee changes
          before they become effective. Such fee changes will not affect any
          bookings made prior to the effective date of the fee change.
        </p>
        <p>
          6.3 You are responsible for paying any Service Fees that you owe to{' '}
          {brandName}. The applicable Service Fees (including any applicable
          Taxes) are collected by {brandName} Payments. {brandName} Payments
          will deduct any Host Fees from the Listing Fee before remitting the
          payout to the Host. Any Guest Fees are included in the Total Fees
          collected by {brandName} Payments. Except as otherwise provided on the{' '}
          {brandName} Platform, Service Fees are non-refundable.
        </p>
        <h4>7. Terms specific for Hosts</h4>
        <h6>7.1 Terms applicable to all Listings</h6>
        <p>
          7.1.1 When creating a Listing through the {brandName} Platform you
          must (i) provide complete and accurate information about your Host
          Service (such as listing description, location, and calendar
          availability), (ii) disclose any deficiencies, restrictions (such as
          house rules) and requirements that apply (such as any minimum age,
          proficiency or fitness requirements for an Experience) and (iii)
          provide any other pertinent information requested by {brandName}. You
          are responsible for keeping your Listing information (including
          calendar availability) up-to-date at all times.
        </p>
        <p>
          7.1.2 You are solely responsible for setting a price (including any
          Taxes if applicable, or charges such as cleaning fees) for your
          Listing (“Listing Fee”). Once a Guest requests a booking of your
          Listing, you may not request that the Guest pays a higher price than
          in the booking request.
        </p>
        <p>
          7.1.3 Any terms and conditions included in your Listing, in particular
          in relation to cancellations, must not conflict with these Terms or
          the relevant cancellation policy for your Listing.
        </p>
        <p>
          7.1.4 {brandName} may enable certain Hosts to participate in its “Open
          Homes Program.” The Open Homes Program enables Hosts to provide
          Listings to certain Guests, such as refugees or evacuees, for free.
          You acknowledge that if you choose to participate in the Open Homes
          Program, your ability to restrict your Listing to certain Guests, such
          as Guests with previous positive Reviews, may be limited.
        </p>
        <p>
          7.1.5 Pictures, animations or videos (collectively, "Images") used in
          your Listings must accurately reflect the quality and condition of
          your Host Services. {brandName} reserves the right to require that
          Listings have a minimum number of Images of a certain format, size and
          resolution.
        </p>
        <p>
          7.1.6 The placement and ranking of Listings in search results on the{' '}
          {brandName} Platform may vary and depend on a variety of factors, such
          as Guest search parameters and preferences, Host requirements, price
          and calendar availability, number and quality of Images, customer
          service and cancellation history, Reviews and Ratings, type of Host
          Service, and/or ease of booking. More information about the factors
          that determine how your Listing appears in search results can be found
          on our help center.
        </p>
        <p>
          7.1.7 When you accept or have pre-approved a booking request by a
          Guest, you are entering into a legally binding agreement with the
          Guest and are required to provide your Host Service(s) to the Guest as
          described in your Listing when the booking request is made. You also
          agree to pay the applicable Host Fee and any applicable Taxes.
        </p>
        <p>
          7.1.8 {brandName} recommends that Hosts obtain appropriate insurance
          for their Host Services. Please review any respective insurance policy
          carefully, and in particular make sure that you are familiar with and
          understand any exclusions to, and any deductibles that may apply for,
          such insurance policy, including, but not limited to, whether or not
          your insurance policy will cover the actions or inactions of Guests
          (and the individuals the Guest has booked for, if applicable) while
          staying at your Accommodation or participating in your Experience,
          Event or other Host Service.
        </p>
        <h6>7.2 Listing Accommodations</h6>
        <p>
          7.2.1 Unless expressly allowed by {brandName}, you may not list more
          than one Accommodation per Listing.
        </p>
        <p>
          7.2.2 If you choose to require a security deposit for your
          Accommodation, you must specify this in your Listing ("Security
          Deposit"). Hosts are not allowed to ask for a Security Deposit (i)
          after a booking has been confirmed or (ii) outside of the {brandName}{' '}
          Platform.
        </p>
        <p>
          7.2.3 Any Listing you post and the booking of, or a Guest's stay at,
          an Accommodation shall (i) not breach any agreements you have entered
          into with any third parties, such as homeowners association,
          condominium, or other agreements, and (ii) comply with all applicable
          laws (such as zoning laws), Tax requirements, and other rules and
          regulations (including having all required permits, licenses and
          registrations).
        </p>
        <h6>7.3 Listing Experiences, Events and other Host Services</h6>
        <p>
          Hosts who list Experiences, Events and Host Services other than
          Accommodations agree to and are subject to the Additional Terms for
          Experience Hosts.
        </p>
        <h6>7.4 Co-Hosts</h6>
        <p>
          7.4.1 {brandName} may enable Hosts to authorize other Members
          (“Co-Hosts”) to administer the Host’s Listing(s), and to bind the Host
          and take certain actions in relation to the Listing(s) as permitted by
          the Host, such as accepting booking requests, messaging and welcoming
          Guests, and updating the Listing Fee and calendar availability
          (collectively, “Co-Host Services”). Any agreement formed between Host
          and Co-Host may not conflict with these Terms, the Payments Terms, or
          any other Policiesapplicable to your Host Service(s). Co-Hosts may
          only act in an individual capacity and not on behalf of a company or
          other organization, unless expressly authorized by {brandName}.{' '}
          {brandName} reserves the right, in our sole discretion, to limit the
          number of Co-Hosts a Host may invite for each Listing and to limit the
          number of Listings a Co-Host may manage.
        </p>
        <p>
          7.4.2 Hosts should exercise due diligence and care when deciding who
          to add as a Co-Host to their Listing(s). Hosts are responsible and
          liable for any and all Listings and Member Content published on the{' '}
          {brandName} Platform created by a Co-Host on their behalf. Further,
          Hosts remain responsible and liable for their own acts and omissions,
          including, but not limited to, conduct that causes harm or damage to
          the Co-Host(s). Co-Hosts remain responsible and liable for their own
          acts and omissions when engaging in their roles and responsibilities
          as a Co-Host, including, but not limited to, conduct that causes harm
          or damage to the Host. In addition, both Host and Co-Host are jointly
          responsible and severally liable for third party claims, including
          Guest claims, arising from the acts and omissions of the other person
          as related to hosting activities, communications with Guests, and the
          provision of any Co-Host Services.
        </p>
        <p>
          7.4.3 Unless agreed otherwise by Host and Co-Host, Host and Co-Host
          may terminate the Co-Host agreement at any time. In addition, both
          Host and Co-Host acknowledge that their Co-hosting relationship will
          terminate in the event that {brandName} (i) terminates the Co-Host
          service or (ii) terminates either party’s participation in the Co-Host
          service. When the Co-Host agreement is terminated, the Host will
          remain responsible for all of the Co-Host’s actions prior to the
          termination, including the responsibility to fulfill any pending or
          future bookings initiated prior to the termination, except in the
          event of gross misconduct or malicious behavior of the Co-Host. When a
          Member is removed as a Co-Host, that Member will no longer have access
          to any Host or Guest information related to the applicable Host’s
          Listing(s).
        </p>
        <p>
          7.4.4 As a Co-Host, you will not be reviewed by Guests, meaning that
          your Co-Host activities will not affect your Reviews or Ratings for
          other Listings for which you are a Host. Instead, the Host of such
          Listing(s) will be reviewed by Guests (including potentially on the
          basis of the Co-Host’s conduct and performance). Hosts acknowledge
          that Reviews and Ratings from Guests for their Listing(s) may be
          impacted by a Co-Host’s conduct and performance.
        </p>
        <h4>8. Terms specific for Guests</h4>
        <h6>8.1 Terms applicable to all bookings</h6>
        <p>
          8.1.1 Subject to meeting any requirements (such as completing any
          verification processes) set by {brandName} and/or the Host, you can
          book a Listing available on the {brandName} Platform by following the
          respective booking process. All applicable fees, including the Listing
          Fee, Security Deposit (if applicable), Guest Fee and any applicable
          Taxes (collectively, “Total Fees”) will be presented to you prior to
          booking a Listing. You agree to pay the Total Fees for any booking
          requested in connection with your {brandName} Account.
        </p>
        <p>
          8.1.2 Upon receipt of a booking confirmation from {brandName}, a
          legally binding agreement is formed between you and your Host, subject
          to any additional terms and conditions of the Host that apply,
          including in particular the applicable cancellation policy and any
          rules and restrictions specified in the Listing. {brandName} Payments
          will collect the Total Fees at the time of the booking request or upon
          the Host’s confirmation pursuant to the Payments Terms. For certain
          bookings, Guests may be required to pay or have the option to pay in
          multiple installments.
        </p>
        <p>
          8.1.3 If you book a Host Service on behalf of additional guests, you
          are required to ensure that every additional guest meets any
          requirements set by the Host, and is made aware of and agrees to these
          Terms and any terms and conditions, rules and restrictions set by the
          Host. If you are booking for an additional guest who is a minor, you
          represent and warrant that you are legally authorized to act on behalf
          of the minor. Minors may only participate in an Experience, Event or
          other Host Service if accompanied by an adult who is responsible for
          them.
        </p>
        <p>
          8.1.4 {brandName} may enable a Guest who is booking a Listing on
          behalf of one or more additional guests (the “Organizer”) to split the
          payment of the Total Fees for an eligible booking on a pro-rata basis
          between the Organizer and at least one other additional guest (each a
          “Co-Payer”) (the “Group Payment Service”). In order to participate in
          the Group Payment Service, each Co-Payer must have or register an{' '}
          {brandName} Account prior to making a payment. All payments via the
          Group Payment Service are handled by {brandName} Payments and are
          subject to the Group Payment Terms of Service.
        </p>
        <h6>8.2 Booking Accommodations</h6>
        <p>
          8.2.1 You understand that a confirmed booking of an Accommodation
          (“Accommodation Booking”) is a limited license granted to you by the
          Host to enter, occupy and use the Accommodation for the duration of
          your stay, during which time the Host (only where and to the extent
          permitted by applicable law) retains the right to re-enter the
          Accommodation, in accordance with your agreement with the Host.
        </p>
        <p>
          8.2.2 You agree to leave the Accommodation no later than the checkout
          time that the Host specifies in the Listing or such other time as
          mutually agreed upon between you and the Host. If you stay past the
          agreed upon checkout time without the Host's consent (“Overstay”), you
          no longer have a license to stay in the Accommodation and the Host is
          entitled to make you leave in a manner consistent with applicable law.
        </p>
        <h6>8.3 Booking Experiences, Events and other Host Services</h6>
        <p>
          8.3.1 You should carefully review the description of any Experience,
          Event or other Host Service you intend to book to ensure you (and any
          additional guests you are booking for) meet any minimum age,
          proficiency, fitness or other requirements which the Host has
          specified in their Listing. At your sole discretion you may want to
          inform the Host of any medical or physical conditions, or other
          circumstances that may impact your and any additional guest’s ability
          to participate in any Experience, Event or other Host Service. In
          addition, certain laws, like the minimum legal drinking age in the
          location of the Experience, Event or other Host Service, may also
          apply.
        </p>
        <p>
          8.3.2 Before and during an Experience, Event or other Host Service you
          must at all times adhere to the Hosts’ instructions.
        </p>
        <p>
          8.3.3 You may not bring any additional individuals to an Experience,
          Event or other Host Service unless such an individual was added by you
          as an additional guest during the booking process on the {brandName}{' '}
          Platform.
        </p>
        <h6>8.4 {brandName} Travel Credits</h6>
        <p>
          {brandName} Travel Credits may be redeemed for eligible bookings via
          the {brandName} Platform as specified in the terms and conditions
          provided with the Travel Credit. You may only redeem {brandName}{' '}
          Travel Credits after the {brandName} Travel Credits are reflected in
          your {brandName} Account.
        </p>
        <h4>
          9. Booking Modifications, Cancellations and Refunds, Resolution Center
        </h4>
        <p>
          9.1 Hosts and Guests are responsible for any modifications to a
          booking that they make via the {brandName} Platform or direct{' '}
          {brandName} customer service to make ("Booking Modifications"), and
          agree to pay any additional Listing Fees, Host Fees or Guest Fees
          and/or Taxes associated with such Booking Modifications.
        </p>
        <p>
          9.2 Guests can cancel a confirmed booking at any time pursuant to the
          Listing’s cancellation policy set by the Host, and {brandName}{' '}
          Payments will refund the amount of the Total Fees due to the Guest in
          accordance with such cancellation policy. Unless extenuating
          circumstances exist, any portion of the Total Fees due to the Host
          under the applicable cancellation policy will be remitted to the Host
          by {brandName} Payments pursuant to the Payments Terms.
        </p>
        <p>
          9.3 If a Host cancels a confirmed booking, the Guest will receive a
          full refund of the Total Fees for such booking. In some instances,{' '}
          {brandName} may allow the Guest to apply the refund to a new booking,
          in which case {brandName} Payments will credit the amount against the
          Guest’s subsequent booking at the Guest’s direction. Further,{' '}
          {brandName} may publish an automated review on the Listing cancelled
          by the Host indicating that a booking was cancelled. In addition,{' '}
          {brandName} may (i) keep the calendar for the Listing unavailable or
          blocked for the dates of the cancelled booking, and/or (ii) impose a
          cancellation fee, unless the Host has a valid reason for cancelling
          the booking pursuant to {brandName}’s Extenuating Circumstances Policy
          or has legitimate concerns about the Guest’s behavior.
        </p>
        <p>
          9.4 For Experiences, Events and other Host Services, if weather poses
          a safety risk to Guests, or if it prevents a Host from carrying out a
          Host Service that takes place primarily outdoors, Hosts may cancel the
          Host Service. Hosts may also cancel the Host Service if other
          conditions exist that would prevent the Host from offering the Host
          Service safely.
        </p>
        <p>
          9.5 In certain circumstances, {brandName} may cancel a pending or
          confirmed booking on behalf of a Host or Guest and initiate
          corresponding refunds and payouts. This may be for reasons set forth
          in {brandName}'s Extenuating Circumstances Policy or for the reasons
          set out in Section 15 of these Terms. Where {brandName} cancels a
          booking, {brandName} will, notify Members and provide the reasons for
          such a measure, unless such notification would (i) prevent or impede
          the detection or prevention of fraud or other illegal activities, (ii)
          harm the legitimate interests of other Members or third parties, or
          (iii) contravene applicable laws. You may appeal a cancellation by
          contacting customer service.
        </p>
        <p>
          9.6 If a Guest who books an Accommodation suffers a Travel Issue as
          defined in the Guest Refund Policy, {brandName} may determine to
          refund the Guest part or all of the Total Fees in accordance with the
          Guest Refund Policy. If a Guest who books an Experience, Event or
          other Host Service suffers a Travel Issue as defined in the
          Experiences Guest Refund Policy, {brandName} may determine, in its
          sole discretion, to refund the Guest part or all of the Total Fees in
          accordance with the Experiences Guest Refund Policy.
        </p>
        <p>
          9.7 If a Guest or {brandName} cancels a confirmed booking, and the
          Guest receives a refund in accordance with the Guest Refund Policy,
          Experiences Guest Refund Policy, Extenuating Circumstances Policy, or
          the applicable cancellation policy set by the Host and mentioned in
          the Listing, after the Host has already been paid, {brandName}{' '}
          Payments will be entitled to recover the amount of any such refund
          from the Host, including by subtracting such refund amount out from
          any future Payouts due to the Host.
        </p>
        <p>
          9.8 Except as otherwise set out in these Terms, Members may use the
          Resolution Center to send or request money for refunds, additional
          Host Services, Co-Host Services or Damage Claims related to bookings.
          You agree to pay all amounts sent through the Resolution Center in
          connection with your {brandName} Account, and {brandName} Payments
          will handle all such payments.
        </p>
        <h4>10. Ratings and Reviews</h4>
        <p>
          10.1 Within a certain timeframe after completing a booking, Guests and
          Hosts can leave a public review (“Review”) and submit a star rating
          (“Rating”) about each other. Ratings or Reviews reflect the opinions
          of individual Members and do not reflect the opinion of {brandName}.
          Ratings and Reviews are not verified by {brandName} for accuracy and
          may be incorrect or misleading.
        </p>
        <p>
          10.2 Ratings and Reviews by Guests and Hosts must be accurate and may
          not contain any offensive or defamatory language. Ratings and Reviews
          are subject to Section 5 and must comply with {brandName}’s Content
          Policy and Extortion Policy.
        </p>
        <p>
          10.3 Members are prohibited from manipulating the Ratings and Reviews
          system in any manner, such as instructing a third party to write a
          positive or negative Review about another Member.
        </p>
        <p>
          10.4 Ratings and Reviews are part of a Member’s public profile and may
          also be surfaced elsewhere on the {brandName} Platform (such as the
          Listing page) together with other relevant information such as number
          of bookings, number of cancellations, average response time and other
          information.
        </p>
        <h4>11. Damage to Accommodations, Disputes between Members</h4>
        <p>
          11.1 As a Guest, you are responsible for leaving the Accommodation
          (including any personal or other property located at the
          Accommodation) in the condition it was in when you arrived. You are
          responsible for your own acts and omissions and are also responsible
          for the acts and omissions of any individuals whom you invite to, or
          otherwise provide access to, the Accommodation, excluding the Host
          (and the individuals the Host invites to the Accommodation, if
          applicable).
        </p>
        <p>
          11.2 If a Host claims and provides evidence that you as a Guest have
          culpably damaged an Accommodation or any personal or other property at
          an Accommodation ("Damage Claim"), the Host can seek payment from you
          through the Resolution Center. If a Host escalates a Damage Claim to{' '}
          {brandName}, you will be given an opportunity to respond. If you agree
          to pay the Host, or {brandName} determines under consideration of any
          applicable statutory rules on the burden of proof that you are
          responsible for the Damage Claim, {brandName} via {brandName} Payments
          will, after the end of your stay, collect any such sums from you
          and/or against the Security Deposit (if applicable) required to cover
          the Damage Claim pursuant to the Payments Terms. {brandName} also
          reserves the right to otherwise collect payment from you and pursue
          any remedies available to {brandName} in this regard in situations in
          which you are responsible for a Damage Claim, including, but not
          limited to, in relation to any payment requests made by Hosts under
          the {brandName} Host Guarantee. You may appeal a decision taken by{' '}
          {brandName} on the basis of this Section 11.2 by contacting customer
          support. Any decisions made by {brandName} in relation to a Damage
          Claim do not affect your contractual or statutory rights. Your right
          to take legal action before a court of law remains unaffected.
        </p>
        <p>
          11.3 Members agree to cooperate with and assist {brandName} in good
          faith, and to provide {brandName} with such information and take such
          actions as may be reasonably requested by {brandName}, in connection
          with any Damage Claims or other complaints or claims made by Members
          relating to (i) Accommodations or any personal or other property
          located at an Accommodation (including, without limitation, payment
          requests made under the {brandName} Host Guarantee), (ii) Experiences,
          (iii) Co-Host agreements, or (iv) a Group Payment Booking. A Member
          shall, upon {brandName}'s reasonable request and at no cost to the
          Member, participate in mediation or a similar resolution process with
          another Member, which process will be conducted by {brandName} or a
          third party selected by {brandName} or its insurer, with respect to
          losses for which a Member is requesting payment from {brandName}{' '}
          (including but not limited to payments under the {brandName} Host
          Guarantee). Members are entitled to terminate their participation in
          the mediation or similar resolution process at any time. A Member’s
          right to take legal action before a court of law remains unaffected.
        </p>
        <h4>12. Rounding off</h4>
        <p>
          {brandName} generally supports payment amounts that are payable from
          or to Guests or Hosts to the smallest unit supported by a given
          currency (i.e., U.S. cents, Euro cents or other supported currencies).
          Where {brandName}’s third-party payment services provider does not
          support payments in the smaller unit supported by a given currency,{' '}
          {brandName} may, in its sole discretion, round up or round down the
          displayed amounts that are payable from or to Guests or Hosts to the
          nearest whole functional base unit in which the currency is
          denominated (i.e. to the nearest dollar, Euro or other supported
          currency); for example, {brandName} may round up an amount of $101.50
          to $102.00, and round down an amount of $101.49 to $101.00.
        </p>
        <h4>13. Taxes</h4>
        <p>
          13.1 As a Host you are solely responsible for determining your
          obligations to report, collect, remit or include in your Listing Fees
          any applicable VAT or other indirect sales taxes, occupancy tax,
          tourist or other visitor taxes or income taxes ("Taxes").
        </p>
        <p>
          13.2 Tax regulations may require us to collect appropriate Tax
          information from Hosts, or to withhold Taxes from payouts to Hosts, or
          both. If a Host fails to provide us with the required documentation
          under applicable law (e.g. a tax number) to alleviate our obligation
          (if any) to withhold Taxes from payouts to you, we reserve the right
          to withhold payouts up to the tax-relevant amount as required by law
          until resolution.
        </p>
        <p>
          13.3 You understand that any appropriate governmental agency,
          department and/or authority ("Tax Authority") where your Accommodation
          is located may require Taxes to be collected from Guests or Hosts on
          Listing Fees, and to be remitted to the respective Tax Authority. The
          laws in jurisdictions may vary, but these Taxes may be required to be
          collected and remitted as a percentage of the Listing Fees set by
          Hosts, a set amount per day, or other variations, and are sometimes
          called "transient occupancy taxes," "hotel taxes," "lodging taxes,"
          "city taxes," "room taxes" or "tourist taxes" ("Occupancy Taxes").
        </p>
        <p>
          13.4 In certain jurisdictions, {brandName} may decide in its sole
          discretion to facilitate collection and remittance of Occupancy Taxes
          from or on behalf of Guests or Hosts, in accordance with these Terms
          ("Collection and Remittance") if such jurisdiction asserts {brandName}{' '}
          or Hosts have an Occupancy Tax collection and remittance obligation.
          In any jurisdiction in which we decide to facilitate direct Collection
          and Remittance, you hereby instruct and authorize {brandName} (via{' '}
          {brandName} Payments) to collect Occupancy Taxes from Guests on the
          Host's behalf at the time Listing Fees are collected, and to remit
          such Occupancy Taxes to the Tax Authority. In other jurisdictions{' '}
          {brandName} may decide in its sole discretion to collect Occupancy
          Taxes and remit such Taxes to eligible and qualifying Hosts, based on
          tax information supplied by the Host, for ultimate reporting and
          remittance by such Host to the Tax Authority (“Pass-Through Tax
          Feature”). Such Hosts using the Pass-Through Tax Feature will be
          solely responsible for informing {brandName} about the correct
          Occupancy Tax amount to be collected from the Guest in accordance with
          applicable law and directly remitting the Occupancy Taxes to the
          relevant Tax Authority. {brandName} does not assume any liability for
          the failure of a participating Host to comply with any applicable tax
          reporting or remittance obligations.The amount of Occupancy Taxes, if
          any, collected and remitted by {brandName} will be visible to and
          separately stated to both Guests and Hosts on their respective
          transaction documents. Where {brandName} is facilitating Collection
          and Remittance, Hosts are not permitted to collect any Occupancy Taxes
          being collected by {brandName} relating to their Accommodations in
          that jurisdiction.
        </p>
        <p>
          13.5 Guests and Hosts agree that we may seek additional amounts from
          you in the event that the Taxes collected and/or remitted are
          insufficient to fully discharge your obligations to the Tax Authority,
          and agree that your sole remedy for Occupancy Taxes collected is a
          refund of Occupancy Taxes collected by {brandName} from the applicable
          Tax Authority in accordance with applicable procedures set by that Tax
          Authority.
        </p>
        <p>
          13.6 {brandName} reserves the right, with prior notice to Hosts, to
          cease the Collection and Remittance in any jurisdiction for any reason
          at which point Hosts and Guests are once again solely responsible and
          liable for the collection and/or remittance of any and all Occupancy
          Taxes that may apply to Accommodations in that jurisdiction.
        </p>
        <h4>14. Prohibited Activities</h4>
        <p>
          14.1 You are solely responsible for compliance with any and all laws,
          rules, regulations, and Tax obligations that may apply to your use of
          the {brandName} Platform. In connection with your use of the{' '}
          {brandName} Platform, you will not and will not assist or enable
          others to:
        </p>
        <ul>
          <li>
            breach or circumvent any applicable laws or regulations, agreements
            with third-parties, third-party rights, or our Terms, Policies or
            Standards;
          </li>
          <li>
            use the {brandName} Platform or Collective Content for any
            commercial or other purposes that are not expressly permitted by
            these Terms or in a manner that falsely implies {brandName}{' '}
            endorsement, partnership or otherwise misleads others as to your
            affiliation with {brandName};
          </li>
          <li>
            copy, store or otherwise access or use any information, including
            personally identifiable information about any other Member,
            contained on the {brandName} Platform in any way that is
            inconsistent with {brandName}’s Privacy Policy or these Terms or
            that otherwise violates the privacy rights of Members or third
            parties;
          </li>
          <li>
            use the {brandName} Platform in connection with the distribution of
            unsolicited commercial messages ("spam");
          </li>
          <li>
            offer, as a Host, any Accommodation that you do not yourself own or
            have permission to make available as a residential or other property
            through the {brandName} Platform;
          </li>
          <li>
            unless {brandName} explicitly permits otherwise, book any Listing if
            you will not actually be using the Host Services yourself;
          </li>
          <li>
            contact another Member for any purpose other than asking a question
            related to your own booking, Listing, or the Member's use of the{' '}
            {brandName} Platform, including, but not limited to, recruiting or
            otherwise soliciting any Member to join third-party services,
            applications or websites, without our prior written approval;
          </li>
          <li>
            use the {brandName} Platform to request, make or accept a booking
            independent of the {brandName} Platform, to circumvent any Service
            Fees or for any other reason;
          </li>
          <li>
            request, accept or make any payment for Listing Fees outside of the{' '}
            {brandName} Platform or {brandName} Payments. If you do so, you: (i)
            accept all risks and responsibility for such payment, and (ii) hold{' '}
            {brandName} harmless from any liability for such payment;
          </li>
          <li>
            discriminate against or harass anyone on the basis of race, national
            origin, religion, gender, gender identity, physical or mental
            disability, medical condition, marital status, age or sexual
            orientation, or otherwise engage in any violent, harmful, abusive or
            disruptive behavior;
          </li>
          <li>
            misuse or abuse any Listings or services associated with the{' '}
            {brandName} Open Homes program;
          </li>
          <li>
            use, display, mirror or frame the {brandName} Platform or Collective
            Content, or any individual element within the {brandName} Platform,{' '}
            {brandName}'s name, any {brandName} trademark, logo or other
            proprietary information, or the layout and design of any page or
            form contained on a page in the {brandName} Platform, without{' '}
            {brandName}'s express written consent;
          </li>
          <li>
            dilute, tarnish or otherwise harm the {brandName} brand in any way,
            including through unauthorized use of Collective Content,
            registering and/or using {brandName} or derivative terms in domain
            names, trade names, trademarks or other source identifiers, or
            registering and/or using domains names, trade names, trademarks or
            other source identifiers that closely imitate or are confusingly
            similar to {brandName} domains, trademarks, taglines, promotional
            campaigns or Collective Content;
          </li>
          <li>
            use any robots, spider, crawler, scraper or other automated means or
            processes to access, collect data or other content from or otherwise
            interact with the {brandName} Platform for any purpose;
          </li>
          <li>
            avoid, bypass, remove, deactivate, impair, descramble, or otherwise
            attempt to circumvent any technological measure implemented by{' '}
            {brandName} or any of {brandName}'s providers or any other third
            party to protect the {brandName} Platform;
          </li>
          <li>
            attempt to decipher, decompile, disassemble or reverse engineer any
            of the software used to provide the {brandName} Platform;
          </li>
          <li>
            take any action that damages or adversely affects, or could damage
            or adversely affect the performance or proper functioning of the{' '}
            {brandName} Platform;
          </li>
          <li>
            export, re-export, import, or transfer the Application except as
            authorized by United States law, the export control laws of your
            jurisdiction, and any other applicable laws; or
          </li>
          <li>
            violate or infringe anyone else’s rights or otherwise cause harm to
            anyone.
          </li>
        </ul>
        <p>
          14.2 You acknowledge that {brandName} has no general obligation to
          monitor Member Content nor to actively seek facts or circumstances
          indicating illegal activity, but has the right to review, disable
          access to, or edit any Member Content, in order to (i) operate, secure
          and improve the security of the {brandName} Platform (including
          without limitation for fraud prevention, risk assessment,
          investigation and customer support purposes); (ii) ensure Members’
          compliance with these Terms; (iii) comply with applicable law or the
          order or requirement of a court, law enforcement or other
          administrative agency or governmental body; (iv) respond to Member
          Content that it determines is harmful or objectionable; or (v) as
          otherwise set forth in these Terms. Members agree to cooperate with
          and assist {brandName} in good faith, and to provide {brandName} with
          such information and take such actions as may be reasonably requested
          by {brandName} with respect to any investigation undertaken by{' '}
          {brandName} or a representative of {brandName} regarding the use or
          abuse of the {brandName} Platform.
        </p>
        <p>
          14.3 If you feel that any Member you interact with, whether online or
          in person, is acting or has acted inappropriately, including but not
          limited to anyone who (i) engages in offensive, violent or sexually
          inappropriate behavior, (ii) you suspect of stealing from you, or
          (iii) engages in any other disturbing conduct, you should immediately
          report such person to the appropriate authorities and then to{' '}
          {brandName} by contacting us with your police station and report
          number (if available). You agree that any report you make will not
          obligate us to take any action (beyond that required by law, if any).
        </p>
        <h4>15. Term and Termination, Suspension and other Measures</h4>
        <p>
          15.1 This Agreement shall be effective until such time when you or{' '}
          {brandName} terminate the Agreement in accordance with this provision.
        </p>
        <p>
          15.2 You may terminate this Agreement at any time by sending us an
          email. If you cancel your {brandName} Account as a Host, any confirmed
          booking(s) will be automatically cancelled and your Guests will
          receive a full refund. If you cancel your {brandName} Account as a
          Guest, any confirmed booking(s) will be automatically cancelled and
          any refund will depend upon the terms of the Listing’s cancellation
          policy.
        </p>
        <p>
          15.3 Without limiting our rights specified below, {brandName} may
          terminate this Agreement for convenience at any time by giving you
          thirty (30) days' notice via email to your registered email address.
        </p>
        <p>
          15.4 {brandName} may immediately, without notice, terminate this
          Agreement and/or stop providing access to the {brandName} Platform if
          (i) you have materially breached your obligations under these Terms,
          the Payments Terms, our Policies or Standards, (ii) you have violated
          applicable laws, regulations or third party rights, or (iii) such
          action is necessary to protect the personal safety or property of{' '}
          {brandName}, its Members, or third parties (for example in the case of
          fraudulent behavior of a Member).
        </p>
        <p>
          15.5 In addition, {brandName} may take any of the following measures
          (i) to comply with applicable law, or the order or request of a court,
          law enforcement or other administrative agency or governmental body,
          or if (ii) you have breached these Terms, the Payments Terms, our
          Policies or Standards, applicable laws, regulations, or third party
          rights, (iii) you have provided inaccurate, fraudulent, outdated or
          incomplete information during the {brandName} Account registration,
          Listing process or thereafter, (iv) you and/or your Listings or Host
          Services at any time fail to meet any applicable quality or
          eligibility criteria, (v) you have repeatedly received poor Ratings or
          Reviews or {brandName} otherwise becomes aware of or has received
          complaints about your performance or conduct, (vi) you have repeatedly
          cancelled confirmed bookings or failed to respond to booking requests
          without a valid reason, or (vii) such action is necessary to protect
          the personal safety or property of {brandName}, its Members, or third
          parties, or to prevent fraud or other illegal activity:
        </p>
        <ul>
          <li>
            refuse to surface, delete or delay any Listings, Ratings, Reviews,
            or other Member Content;
          </li>
          <li>cancel any pending or confirmed bookings;</li>
          <li>limit your access to or use of the {brandName} Platform;</li>
          <li>
            temporarily or permanently revoke any special status associated with
            your {brandName} Account;
          </li>
          <li>
            temporarily or in case of severe or repeated offenses permanently
            suspend your {brandName} Account and stop providing access to the{' '}
            {brandName} Platform.
          </li>
          <li>
            In case of non-material breaches and where appropriate, you will be
            given notice of any intended measure by {brandName} and an
            opportunity to resolve the issue to {brandName}'s reasonable
            satisfaction.
          </li>
        </ul>
        <p>
          15.6 If we take any of the measures described above (i) we may refund
          your Guests in full for any and all confirmed bookings that have been
          cancelled, irrespective of preexisting cancellation policies, and (ii)
          you will not be entitled to any compensation for pending or confirmed
          bookings that were cancelled.
        </p>
        <p>
          15.7 When this Agreement has been terminated, you are not entitled to
          a restoration of your {brandName} Account or any of your Member
          Content. If your access to or use of the {brandName} Platform has been
          limited or your {brandName} Account has been suspended or this
          Agreement has been terminated by us, you may not register a new{' '}
          {brandName} Account or access and use the {brandName} Platform through
          an {brandName} Account of another Member.
        </p>
        <p>
          15.8 If {brandName} takes any of the measures described in this
          Section 15 you may appeal such a decision by contacting our customer
          service.
        </p>
        <h4>16. Disclaimers</h4>
        <p>Intentionally left blank</p>
        <h4>17. Liability</h4>
        <p>
          {brandName} is liable under statutory provisions for intent and gross
          negligence by us, our legal representatives, directors, or other
          vicarious agents. The same applies to the assumption of guarantees or
          any other strict liability, or in case of a culpable injury to life,
          limb, or health. {brandName} is liable for any negligent breaches of
          essential contractual obligations by us, our legal representatives,
          directors, or other vicarious agents; such liability is limited to the
          typically occurring foreseeable damages. Essential contractual
          obligations are such duties of {brandName} in whose proper fulfilment
          you regularly trust and must trust for the proper execution of the
          contract. Any additional liability of {brandName} is excluded.
        </p>
        <h4>18. Indemnification</h4>
        <p>
          To the maximum extent permitted by applicable law, you agree to
          release, defend (at {brandName}’s option), indemnify, and hold{' '}
          {brandName} and its affiliates and subsidiaries, including but not
          limited to, {brandName} Payments, and their officers, directors,
          employees and agents, harmless from and against any claims,
          liabilities, damages, losses, and expenses, including, without
          limitation, reasonable legal and accounting fees, arising out of or in
          any way connected with (i) your breach of these Terms or our Policies
          or Standards, (ii) your improper use of the {brandName} Platform or
          any {brandName} Services, (iii) your interaction with any Member, stay
          at an Accommodation, participation in an Experience, Event or other
          Host Service, participation in the Group Payment Service, including
          without limitation any injuries, losses or damages (whether
          compensatory, direct, incidental, consequential or otherwise) of any
          kind arising in connection with or as a result of such interaction,
          stay, participation or use, or (iv) your breach of any laws,
          regulations or third party rights. The indemnification obligation
          according to this Section 18 only applies if and to the extent that
          the claims, liabilities, damages, losses, and expenses have been
          adequately caused by your culpable breach of a contractual obligation.
        </p>
        <h4>19. Dispute Resolution and Arbitration Agreement</h4>
        <p>
          19.1 This Dispute Resolution and Arbitration Agreement shall apply if
          you bring any claim against {brandName} in the United States (to the
          extent not in conflict with Section 21).
        </p>
        <p>
          19.2 Overview of Dispute Resolution Process. {brandName} is committed
          to participating in a consumer-friendly dispute resolution process. To
          that end, these Terms provide for a two-part process for individuals
          to whom Section 19.1 applies: (1) an informal negotiation directly
          with {brandName}’s customer service team, and (2) a binding
          arbitration administered by the American Arbitration Association
          (“AAA”) using its specially designed Consumer Arbitration Rules (as
          modified by this Section 19 and except as provided in Section 19.6).
          Specifically, the Consumer Arbitration Rules provide:
        </p>
        <ul>
          <li>Claims can be filed with AAA online (www.adr.org);</li>
          <li>
            Arbitrators must be neutral and no party may unilaterally select an
            arbitrator;
          </li>
          <li>
            Arbitrators must disclose any bias, interest in the result of the
            arbitration, or relationship with any party;
          </li>
          <li>
            Parties retain the right to seek relief in small claims court for
            certain claims, at their option;
          </li>
          <li>The initial filing fee for the consumer is capped at $200;</li>
          <li>
            The consumer gets to elect the hearing location and can elect to
            participate live, by phone, video conference, or, for claims under
            $25,000, by the submission of documents;
          </li>
          <li>
            The arbitrator can grant any remedy that the parties could have
            received in court to resolve the party’s individual claim.
          </li>
        </ul>
        <p>
          19.3 Pre-Arbitration Dispute Resolution and Notification. Prior to
          initiating an arbitration, you and {brandName} each agree to notify
          the other party of the dispute and attempt to negotiate an informal
          resolution to it first. We will contact you at the email address you
          have provided to us; you can contact {brandName}’s customer service
          team by emailing us. If after a good faith effort to negotiate one of
          us feels the dispute has not and cannot be resolved informally, the
          party intending to pursue arbitration agrees to notify the other party
          via email prior to initiating the arbitration. In order to initiate
          arbitration, a claim must be filed with the AAA and the written Demand
          for Arbitration (available at www.adr.org) provided to the other
          party, as specified in the AAA Rules.
        </p>
        <p>
          19.4 Agreement to Arbitrate. You and {brandName} mutually agree that
          any dispute, claim or controversy arising out of or relating to these
          Terms or the applicability, breach, termination, validity, enforcement
          or interpretation thereof, or to the use of the {brandName} Platform,
          the Host Services, the Group Payment Service, or the Collective
          Content (collectively, “Disputes”) will be settled by binding
          individual arbitration (the “Arbitration Agreement”). If there is a
          dispute about whether this Arbitration Agreement can be enforced or
          applies to our Dispute, you and {brandName} agree that the arbitrator
          will decide that issue.
        </p>
        <p>
          19.5 Exceptions to Arbitration Agreement. You and {brandName} each
          agree that the following claims are exceptions to the Arbitration
          Agreement and will be brought in a judicial proceeding in a court of
          competent jurisdiction: (i) Any claim related to actual or threatened
          infringement, misappropriation or violation of a party’s copyrights,
          trademarks, trade secrets, patents, or other intellectual property
          rights; (ii) Any claim seeking emergency injunctive relief based on
          exigent circumstances (e.g., imminent danger or commission of a crime,
          hacking, cyber-attack).
        </p>
        <p>
          19.6 Arbitration Rules and Governing Law. This Arbitration Agreement
          evidences a transaction in interstate commerce and thus the Federal
          Arbitration Act governs the interpretation and enforcement of this
          provision. The arbitration will be administered by AAA in accordance
          with the Consumer Arbitration Rules and/or other AAA arbitration rules
          determined to be applicable by the AAA (the “AAA Rules“) then in
          effect, except as modified here. The AAA Rules are available at
          www.adr.org or by calling the AAA at 1–800–778–7879.
        </p>
        <p>
          19.7 Modification to AAA Rules - Arbitration Hearing/Location. In
          order to make the arbitration most convenient to you, {brandName}{' '}
          agrees that any required arbitration hearing may be conducted, at your
          option, (a) in the county where you reside; (b) in San Francisco
          County; (c) in any other location to which you and {brandName} both
          agree; (d) via phone or video conference; or (e) for any claim or
          counterclaim under $25,000, by solely the submission of documents to
          the arbitrator.
        </p>
        <p>
          19.8 Modification of AAA Rules - Attorney’s Fees and Costs. You and{' '}
          {brandName} agree that {brandName} will be responsible for payment of
          the balance of any initial filing fee under the AAA Rules in excess of
          $200 for claims of $75,000 or less. You may be entitled to seek an
          award of attorney fees and expenses if you prevail in arbitration, to
          the extent provided under applicable law and the AAA rules. Unless the
          arbitrator determines that your claim was frivolous or filed for the
          purpose of harassment, {brandName} agrees it will not seek, and hereby
          waives all rights it may have under applicable law or the AAA Rules,
          to recover attorneys’ fees and expenses if it prevails in arbitration.
        </p>
        <p>
          19.9 Arbitrator’s Decision. The arbitrator’s decision will include the
          essential findings and conclusions upon which the arbitrator based the
          award. Judgment on the arbitration award may be entered in any court
          with proper jurisdiction. The arbitrator may award declaratory or
          injunctive relief only on an individual basis and only to the extent
          necessary to provide relief warranted by the claimant’s individual
          claim.
        </p>
        <p>
          19.10 Jury Trial Waiver. You and {brandName} acknowledge and agree
          that we are each waiving the right to a trial by jury as to all
          arbitrable Disputes.
        </p>
        <p>
          19.11 No Class Actions or Representative Proceedings. You and{' '}
          {brandName} acknowledge and agree that, to the fullest extent
          permitted by law, we are each waiving the right to participate as a
          plaintiff or class member in any purported class action lawsuit,
          class-wide arbitration, private attorney-general action, or any other
          representative proceeding as to all Disputes. Further, unless you and{' '}
          {brandName} both otherwise agree in writing, the arbitrator may not
          consolidate more than one party’s claims and may not otherwise preside
          over any form of any class or representative proceeding. If the “class
          action lawsuit” waiver or the “class-wide arbitration” waiver in this
          Section 19.11 is held unenforceable with respect to any Dispute, then
          the entirety of the Arbitration Agreement will be deemed void with
          respect to such Dispute and the Dispute must proceed in court. If the
          “private attorney general action” waiver or the “representative
          proceeding” waiver in this Section 19.11 is held unenforceable with
          respect to any Dispute, those waivers may be severed from this
          Arbitration Agreement and you and {brandName} agree that any private
          attorney general claims and representative claims in the Dispute will
          be severed and stayed, pending the resolution of any arbitrable claims
          in the Dispute in individual arbitration.
        </p>
        <p>
          19.12 Severability. Except as provided in Section 19.11, in the event
          that any portion of this Arbitration Agreement is deemed illegal or
          unenforceable, such provision shall be severed and the remainder of
          the Arbitration Agreement shall be given full force and effect.
        </p>
        <p>
          19.13 Changes. Notwithstanding the provisions of Section 3
          (“Modification of these Terms”), if {brandName} changes this Section
          19 (“Dispute Resolution and Arbitration Agreement”) after the date you
          last accepted these Terms (or accepted any subsequent changes to these
          Terms), you may reject any such change by sending us written notice
          (including by email) within thirty (30) days of the date such change
          became effective, as indicated in the “Last Updated” date above or in
          the date of {brandName}’s email to you notifying you of such change.
          Rejecting a new change, however, does not revoke or alter your prior
          consent to any earlier agreements to arbitrate any Dispute between you
          and {brandName} (or your prior consent to any subsequent changes
          thereto), which will remain in effect and enforceable as to any
          Dispute between you and {brandName}.
        </p>
        <p>
          19.14 Survival. Except as provided in Section 19.12, this Section 19
          will survive any termination of these Terms and will continue to apply
          even if you stop using the {brandName} Platform or terminate your{' '}
          {brandName} Account.
        </p>
        <h4>20. Feedback</h4>
        <p>
          We welcome and encourage you to provide feedback, comments and
          suggestions for improvements to the {brandName} Platform (“Feedback“).
          You may submit Feedback by emailing us, through the “Contact” section
          of the {brandName} Platform, or by other means of communication. Any
          Feedback you submit to us may be used by us for any business purpose
          and will be considered non-confidential and non-proprietary to you.
        </p>
        <h4>21. Applicable Law and Jurisdiction</h4>
        <p>
          These Terms are governed by and construed in accordance with Irish
          law. If you are acting as a consumer and if mandatory statutory
          consumer protection regulations in your country of residence contain
          provisions that are more beneficial for you, such provisions shall
          apply irrespective of the choice of Irish law. As a consumer, you may
          bring any judicial proceedings relating to these Terms before the
          competent court of your place of residence or the competent court of{' '}
          {brandName}'s place of business in Ireland. If {brandName} wishes to
          enforce any of its rights against you as a consumer, we may do so only
          in the courts of the jurisdiction in which you are a resident. If you
          are acting as a business, you agree to submit to the exclusive
          jurisdiction of the Irish courts.
        </p>
        <h4>22. General Provisions</h4>
        <p>
          22.1 Except as they may be supplemented by additional terms and
          conditions, policies, guidelines or standards, these Terms constitute
          the entire Agreement between {brandName} and you pertaining to the
          subject matter hereof, and supersede any and all prior oral or written
          understandings or agreements between {brandName} and you in relation
          to the access to and use of the {brandName} Platform.
        </p>
        <p>
          22.2 No joint venture, partnership, employment, or agency relationship
          exists between you and {brandName} as a result of this Agreement or
          your use of the {brandName} Platform.
        </p>
        <p>
          22.3 These Terms do not and are not intended to confer any rights or
          remedies upon any person other than the parties.
        </p>
        <p>
          22.4 If any provision of these Terms is held to be invalid or
          unenforceable, such provision will be struck and will not affect the
          validity and enforceability of the remaining provisions.
        </p>
        <p>
          22.5 {brandName}’s failure to enforce any right or provision in these
          Terms will not constitute a waiver of such right or provision unless
          acknowledged and agreed to by us in writing. Except as expressly set
          forth in these Terms, the exercise by either party of any of its
          remedies under these Terms will be without prejudice to its other
          remedies under these Terms or otherwise permitted under law.
        </p>
        <p>
          22.6 You may not assign, transfer or delegate this Agreement and your
          rights and obligations hereunder without {brandName}'s prior written
          consent. {brandName} may without restriction assign, transfer or
          delegate this Agreement and any rights and obligations hereunder, at
          its sole discretion, with 30 days prior notice. Your right to
          terminate this Agreement at any time remains unaffected.
        </p>
        <p>
          22.7 Unless specified otherwise, any notices or other communications
          to Members permitted or required under this Agreement, will be
          provided electronically and given by {brandName} via email,{' '}
          {brandName} Platform notification, or messaging service (including SMS
          and WeChat). If your booking is in respect of a Listing in Japan, you
          agree and acknowledge that such notifications via electronic means in
          lieu of a written statement, satisfies {brandName}’s obligations under
          Article 59 Paragraph 1 of the Japanese Housing Accommodation Business
          Act.
        </p>
        <p>22.8 If you have any questions about these Terms please email us.</p>
        <br />
        <footer className='page-footer fixed-bottom'>
          <BottomNavbar />
        </footer>
      </div>
    )
  }
}

export default Terms
